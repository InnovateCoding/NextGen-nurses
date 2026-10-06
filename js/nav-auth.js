import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Changes the account link in the site navigation automatically:
// logged out -> Login, logged in -> Dashboard.
onAuthStateChanged(auth, (user) => {
  document.querySelectorAll('a[href="account.html"], a[href="./account.html"]').forEach((link) => {
    if (user) {
      link.href = "dashboard.html";
      link.innerHTML = '<i class="bi bi-speedometer2"></i> Dashboard';
      link.setAttribute("aria-label", "Open Dashboard");
    } else {
      link.href = "account.html";
      link.innerHTML = '<i class="bi bi-person-circle"></i> Login';
      link.setAttribute("aria-label", "Login or create account");
    }
  });
});
