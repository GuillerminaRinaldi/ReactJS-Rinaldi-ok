import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnVu8OArUEnQ9gLfIhQaDzsPJPiJoCDsQ",
  authDomain: "proyecto-coder-rinaldi.firebaseapp.com",
  projectId: "proyecto-coder-rinaldi",
  storageBucket: "proyecto-coder-rinaldi.appspot.com",
  messagingSenderId: "748485042246",
  appId: "1:748485042246:web:39081c323a37f431982a47"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };