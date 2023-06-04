// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0dPuQLw3a8Bm63AO7wBbVJdM7pZSaQIA",
  authDomain: "webex18-2.firebaseapp.com",
  projectId: "webex18-2",
  storageBucket: "webex18-2.appspot.com",
  messagingSenderId: "920694518507",
  appId: "1:920694518507:web:89cf766d850f5a4ea3c4ae",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
