import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDQkVu6XI5VpUw3dGzerwYeXs64KHJ1wKM",
  authDomain: "netninja-vue-sites.firebaseapp.com",
  projectId: "netninja-vue-sites",
  storageBucket: "netninja-vue-sites.appspot.com",
  messagingSenderId: "114244171265",
  appId: "1:114244171265:web:35e1ab69e220930bc63200"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }