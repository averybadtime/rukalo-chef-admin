import firebase from "firebase"

const config = {
  apiKey: "AIzaSyCcPAAVm3HHzIe10Ui3qdOzaO9bdO1zitU",
  authDomain: "rukalo-chef.firebaseapp.com",
  databaseURL: "https://rukalo-chef.firebaseio.com",
  projectId: "rukalo-chef",
  storageBucket: "rukalo-chef.appspot.com",
  messagingSenderId: "95083075362"
}

firebase.initializeApp(config)

export const DB = firebase.database()
export const AUTH = firebase.auth()
export const STORAGE = firebase.storage()