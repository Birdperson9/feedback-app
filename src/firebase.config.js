// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaawVQfjD4yhDpscInywrnn0-XkFA3hVc',
  authDomain: 'feedback-app-4fc75.firebaseapp.com',
  projectId: 'feedback-app-4fc75',
  storageBucket: 'feedback-app-4fc75.appspot.com',
  messagingSenderId: '817298557677',
  appId: '1:817298557677:web:31342cd86cd8e1d185dae4',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
