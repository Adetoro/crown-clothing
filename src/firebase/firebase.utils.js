import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXPr6yHKNcpusx_4UvJOHS_r-2lBrUFiU",
    authDomain: "crown-db-7ec49.firebaseapp.com",
    projectId: "crown-db-7ec49",
    storageBucket: "crown-db-7ec49.appspot.com",
    messagingSenderId: "381815098088",
    appId: "1:381815098088:web:97edfd698f4138945dd75d",
    measurementId: "G-0DZXS5BXK3"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot  = await userRef.get();

   if(!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }
     catch(error) {
       console.log('error creatig user', error.message);
     }
   }

   return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;