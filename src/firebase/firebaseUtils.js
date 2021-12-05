import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"



// Firebase Configuration Object
const firebaseConfig = {
    apiKey: "AIzaSyDRrQflxyzxJ9oidDEbg2OrKW6UsSNUSbg",
    authDomain: "pikaflixx-df449.firebaseapp.com",
    projectId: "pikaflixx-df449",
    storageBucket: "pikaflixx-df449.appspot.com",
    messagingSenderId: "736546292478",
    appId: "1:736546292478:web:94f426054614fddb88dbaf",
    measurementId: "G-J9BQJJRZ74"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }

    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

// Firebase web app init
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in With Google Setup with popup
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
