import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLXE8nlQG52Tbl7OGwimLLK-3dw9pxzKw",
    authDomain: "altavoz-da78b.firebaseapp.com",
    projectId: "altavoz-da78b",
    storageBucket: "altavoz-da78b.appspot.com",
    messagingSenderId: "703931067785",
    appId: "1:703931067785:web:29c60c0373a225aabb0558"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;