import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { putResolve } from 'redux-saga/effects';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'clothing-co-f4112.firebaseapp.com',
  databaseURL: 'https://clothing-co-f4112.firebaseio.com',
  projectId: 'clothing-co-f4112',
  storageBucket: 'clothing-co-f4112.appspot.com',
  messagingSenderId: '352976805755',
  appId: '1:352976805755:web:2ced71a2007eda656b67de',
  measurementId: 'G-2RNDYZMTQL',
};

firebase.initializeApp(config);

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

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  console.log('addCollectionAndDocs -> collectionRef', collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((res, err) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, err);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
