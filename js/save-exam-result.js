import { auth, db } from "./firebase-config.js";
import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function saveExamResult({ examId, examName, score, totalQuestions, timeSpent = "—", category = "General" }) {
  const user = auth.currentUser;

  if (!user) {
    return { saved: false, reason: "not-authenticated" };
  }

  const total = Number(totalQuestions) || 0;
  const correct = Number(score) || 0;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const seconds = Number(timeSpent);
  const formattedTime = Number.isFinite(seconds) && seconds >= 0
    ? `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`
    : String(timeSpent);

  await addDoc(collection(db, "users", user.uid, "examResults"), {
    examId,
    examName,
    score: correct,
    totalQuestions: total,
    percentage,
    timeSpent: formattedTime,
    category,
    completedAt: serverTimestamp()
  });

  return { saved: true, percentage };
}
