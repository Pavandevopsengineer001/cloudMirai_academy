// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZkXdHqo9Hx9sVmUrlYGob1294kSo5lM8",
  authDomain: "cloudmirai-academy.firebaseapp.com",
  projectId: "cloudmirai-academy",
  storageBucket: "cloudmirai-academy.firebasestorage.app",
  messagingSenderId: "298055652258",
  appId: "1:298055652258:web:b9e8e427a473e12572d8fb",
};

const app = initializeApp(firebaseConfig);

// ✅ Firestore only (no analytics needed)
export const db = getFirestore(app);
