import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiJUrA-88UgIeuZvrGIFvTwAopcNyHMTU",
    authDomain: "vue-blogs-49aae.firebaseapp.com",
    projectId: "vue-blogs-49aae",
    storageBucket: "vue-blogs-49aae.firebasestorage.app",
    messagingSenderId: "345118009117",
    appId: "1:345118009117:web:96e9cf58cc33734b81a3f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }