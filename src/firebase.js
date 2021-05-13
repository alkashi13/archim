import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbTBoxriACjRmzaJ_VMTKboJNUiUMqwEc",
  authDomain: "project-a61ba.firebaseapp.com",
  projectId: "project-a61ba",
  storageBucket: "project-a61ba.appspot.com",
  messagingSenderId: "79905673118",
  appId: "1:79905673118:web:76804e6e250e393796508f",
  measurementId: "G-E0DS0YCGSL"
})

export const auth = app.auth()
export default app
