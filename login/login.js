import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebaseconfig.js";



const loginBtn = document.querySelector("#loginBtn");
const lEmail = document.querySelector("#L-email");
const lPass = document.querySelector("#L-password");
// console.log(lEmail);
// console.log(lPass);

let loginHandler = () => {
  console.log("login Handler is working!");

  signInWithEmailAndPassword(auth, lEmail.value, lPass.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if(user){
        console.log("user==>", user);
        window.location.href= "../dashboard/dashboard.html"
      }
    })
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
};
loginBtn.addEventListener("click", loginHandler);
