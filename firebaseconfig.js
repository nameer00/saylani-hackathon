import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDFzIf3VwyWz8qxKRDV01znLBFmV9xDXvA",
  authDomain: "jobapplication-2be62.firebaseapp.com",
  projectId: "jobapplication-2be62",
  storageBucket: "jobapplication-2be62.appspot.com",
  messagingSenderId: "1089226957115",
  appId: "1:1089226957115:web:c18de1fa69e96a1c63171e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } ;