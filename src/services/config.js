import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCo3lFD8V96Ypf67fLRVZx2rMypCmG3r1w",
  authDomain: "rbn-entrega.firebaseapp.com",
  projectId: "rbn-entrega",
  storageBucket: "rbn-entrega.appspot.com",
  messagingSenderId: "813499459543",
  appId: "1:813499459543:web:5bb68754185ca2cabe4d92"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);