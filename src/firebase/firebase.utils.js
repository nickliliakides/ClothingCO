import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADapWjWk187qwXbn45ym3xxKGdOu1ne3E',
  authDomain: 'clothing-co-f4112.firebaseapp.com',
  databaseURL: 'https://clothing-co-f4112.firebaseio.com',
  projectId: 'clothing-co-f4112',
  storageBucket: 'clothing-co-f4112.appspot.com',
  messagingSenderId: '352976805755',
  appId: '1:352976805755:web:2ced71a2007eda656b67de',
  measurementId: 'G-2RNDYZMTQL',
};

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
      });
    } catch (error) {
      console.log('Error creating user', error.message);
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
