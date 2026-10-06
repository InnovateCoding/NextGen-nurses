import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const $ = (id) => document.getElementById(id);
const message = $("auth-message");

function showMessage(text, type = "error") {
  if (!message) return;
  message.textContent = text;
  message.className = `auth-message ${type}`;
  message.style.display = "block";
}

function friendlyError(error) {
  const map = {
    "auth/email-already-in-use": "الإيميل ده مسجل بالفعل. جربي تسجيل الدخول.",
    "auth/invalid-email": "اكتبي إيميل صحيح.",
    "auth/weak-password": "الباسورد لازم يكون أقوى.",
    "auth/invalid-credential": "الإيميل أو الباسورد غير صحيح.",
    "auth/invalid-login-credentials": "الإيميل أو الباسورد غير صحيح.",
    "auth/too-many-requests": "محاولات كثيرة. حاولي مرة أخرى بعد قليل."
  };
  return map[error.code] || "حدث خطأ. حاولي مرة أخرى.";
}

const registerForm = $("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = $("register-name").value.trim();
    const email = $("register-email").value.trim();
    const password = $("register-password").value;

    if (!name || !email || !password) {
      showMessage("كمّلي كل البيانات.");
      return;
    }

    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user, { displayName: name });
      await setDoc(doc(db, "users", credential.user.uid), {
        name,
        email,
        createdAt: serverTimestamp()
      });
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error(error);
      showMessage(friendlyError(error));
    }
  });
}

const loginForm = $("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = $("login-email").value.trim();
    const password = $("login-password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error(error);
      showMessage(friendlyError(error));
    }
  });
}

const logoutButton = $("logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "account.html";
  });
}

onAuthStateChanged(auth, (user) => {
  const protectedPage = document.body.dataset.protected === "true";
  if (protectedPage && !user) {
    window.location.href = "account.html";
  }
});
