import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCaokMeP7tIdxtlW3WnsaAvL8B0h-RTTa4',
  authDomain: 'mfm-dojo.firebaseapp.com',
  projectId: 'mfm-dojo',
  // storageBucket: 'mfm-dojo.appspot.com',
  storageBucket: 'mfm-dojo',
  messagingSenderId: '378596421104',
  appId: '1:378596421104:web:011d6f00f4286127f20135',
  measurementId: 'G-0P958MSB0F',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDXBeEYHuAA42LMCkxhdsOoYdMO2n7tgos",
//   authDomain: "udemy-files-dojo.firebaseapp.com",
//   projectId: "udemy-files-dojo",
//   storageBucket: "udemy-files-dojo.appspot.com",
//   messagingSenderId: "244633033606",
//   appId: "1:244633033606:web:aa1833bda9c7906227ea07"
// }

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectAnalytics = firebase.analytics();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {
  projectFirestore,
  projectAuth,
  timestamp,
  projectStorage,
  projectAnalytics,
};
