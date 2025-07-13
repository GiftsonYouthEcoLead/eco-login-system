// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  storageBucket: "youthecoleadauth.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

///////////////////////////////////////////////////
// 🔐 LOGIN FUNCTION
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("login-message");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        message.style.color = "green";
        message.textContent = "Login successful!";
        setTimeout(() => {
          window.location.href = "dashboard.html"; // or your dashboard
        }, 1500);
      })
      .catch((error) => {
        message.style.color = "red";
        message.textContent = error.message;
      });
  });
}

///////////////////////////////////////////////////
// 📝 SIGNUP FUNCTION
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const message = document.getElementById("signup-message");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        message.style.color = "green";
        message.textContent = "Signup successful!";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      })
      .catch((error) => {
        message.style.color = "red";
        message.textContent = error.message;
      });
  });
}
