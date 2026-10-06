import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const $ = (id) => document.getElementById(id);

function formatDate(timestamp) {
  if (!timestamp) return "—";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

function renderCategoryProgress(results) {
  const categories = {};
  results.forEach((item) => {
    const category = item.category || "General";
    if (!categories[category]) categories[category] = [];
    categories[category].push(Number(item.percentage || 0));
  });

  const container = $("category-progress");
  const entries = Object.entries(categories);
  if (!entries.length) {
    container.innerHTML = '<p class="muted mb-0">حل أول امتحان عشان يظهر تقدمك حسب التخصص.</p>';
    return;
  }

  container.innerHTML = entries.map(([category, scores]) => {
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    return `
      <div class="category-row">
        <div class="d-flex justify-content-between mb-1">
          <strong>${escapeHtml(category)}</strong><span>${avg}%</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${avg}%"></div></div>
      </div>`;
  }).join("");
}

function renderStrengths(results) {
  const container = $("strengths");
  const grouped = {};
  results.forEach((item) => {
    const category = item.category || "General";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(Number(item.percentage || 0));
  });

  const items = Object.entries(grouped).map(([category, scores]) => ({
    category,
    avg: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  })).sort((a, b) => b.avg - a.avg);

  if (!items.length) {
    container.innerHTML = '<p class="muted mb-0">لا توجد بيانات كافية حتى الآن.</p>';
    return;
  }

  const strongest = items[0];
  const weakest = items[items.length - 1];
  container.innerHTML = `
    <div class="insight"><span>💪 أقوى جانب</span><strong>${escapeHtml(strongest.category)} — ${strongest.avg}%</strong></div>
    ${items.length > 1 ? `<div class="insight"><span>🎯 يحتاج مراجعة</span><strong>${escapeHtml(weakest.category)} — ${weakest.avg}%</strong></div>` : ""}
  `;
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  $("user-name").textContent = user.displayName || "Nurse";
  $("user-email").textContent = user.email || "";

  try {
    const resultsQuery = query(
      collection(db, "users", user.uid, "examResults"),
      orderBy("completedAt", "desc")
    );
    const snapshot = await getDocs(resultsQuery);
    const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const attempts = results.length;
    const average = attempts
      ? Math.round(results.reduce((sum, item) => sum + Number(item.percentage || 0), 0) / attempts)
      : 0;
    const best = attempts
      ? Math.max(...results.map((item) => Number(item.percentage || 0)))
      : 0;
    const questionsAnswered = results.reduce((sum, item) => sum + Number(item.totalQuestions || 0), 0);
    const uniqueExams = new Set(results.map((item) => item.examId)).size;

    $("attempts").textContent = attempts;
    $("average").textContent = `${average}%`;
    $("best").textContent = `${best}%`;
    $("questions-answered").textContent = questionsAnswered;

    // Real overall progress: coverage of the 14 supported exam tracks + average performance.
    const totalTracks = 14;
    const coverage = Math.min(100, Math.round((uniqueExams / totalTracks) * 100));
    const progress = attempts ? Math.round((coverage * 0.5) + (average * 0.5)) : 0;
    $("progress-value").textContent = `${progress}%`;
    $("progress-bar").style.width = `${progress}%`;
    $("progress-note").textContent = `${uniqueExams} من ${totalTracks} مسارات امتحانات تم تجربتها، ومتوسط أدائك ${average}%.`;

    renderCategoryProgress(results);
    renderStrengths(results);

    const table = $("results-body");
    if (!results.length) {
      table.innerHTML = '<tr><td colspan="6" class="empty">لسه مفيش امتحانات متسجلة. حل أول امتحان وارجع هنا.</td></tr>';
      return;
    }

    table.innerHTML = results.map((item) => `
      <tr>
        <td>${escapeHtml(item.examName)}</td>
        <td>${Number(item.score || 0)} / ${Number(item.totalQuestions || 0)}</td>
        <td><strong>${Number(item.percentage || 0)}%</strong></td>
        <td>${escapeHtml(item.timeSpent || "—")}</td>
        <td>${escapeHtml(item.category || "General")}</td>
        <td>${escapeHtml(formatDate(item.completedAt))}</td>
      </tr>
    `).join("");
  } catch (error) {
    console.error(error);
    $("results-body").innerHTML = '<tr><td colspan="6" class="empty">حصلت مشكلة في تحميل النتائج. تأكدي من Firestore Rules.</td></tr>';
  }
});
