import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqdFypeqnnHIefpjNce_aWOjvLv0MOsIM",
    authDomain: "nextgen-nurses.firebaseapp.com",
    projectId: "nextgen-nurses",
    storageBucket: "nextgen-nurses.firebasestorage.app",
    messagingSenderId: "439152872974",
    appId: "1:439152872974:web:dc6c24e57036227c36f65f"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
