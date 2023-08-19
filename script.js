import { auth, createUserWithEmailAndPassword } from "./firebaseconfig.js"



const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatpassword = document.querySelector("#repeatpassword");
const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signuphandler)

async function signuphandler() {


        console.log("signup button is working!");
        console.log(firstName.value)
        console.log(lastName.value)
        console.log(email.value)
        console.log(password.value)
        console.log(repeatpassword.value)
        
        if (!firstName.value || !lastName.value || !email.value || !password.value || !repeatpassword.value) {
            return alert("all fiels are required!")
        }

        if (password.value.length < 6) {
            return alert("password should be 6 char!")
        }
        if (password.value !== repeatpassword.value) {
            return alert("password are not match!")
        }
        createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    // console.log(userCredential.uid.user);
    const user = userCredential.user;
    // console.log(user);
    if(user) {
        console.log("le kar jao na")
        window.location.href= " ./login/login.html"
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
  });

    }
//         const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 console.log(user)
//             })
//             // .catch((error) => {
//             //     const errorCode = error.code;
//             //     const errorMessage = error.message;
//             //     console.log(errorCode);
//             //     console.log(errorMessage);
//             // });



//     if(userCredential){
//        console.log(userCredential.user.uid)
//     }
// }
//     catch{
//         const errorCode= error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//      }

    
// }
