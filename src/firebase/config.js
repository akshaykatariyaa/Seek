import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACVfOVuqiGxWVi_TtqJ5Paov-zmhq-QMo",
  authDomain:
    "900685345486-vq92fse9ajcmat6v69uu6ugv1ej5qu3g.apps.googleusercontent.com",
  databaseURL: "https://seekproject-93a9b.firebaseio.com",
  projectId: "seekproject-93a9b",
  storageBucket: "gs://seekproject-93a9b.appspot.com",
  messagingSenderId: "900685345486",
  appId: `
  1:900685345486:android:4091646120e525841f969f`,
};

app = firebase.initializeApp(firebaseConfig);

export { firebase };
