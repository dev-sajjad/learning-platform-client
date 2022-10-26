import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCALgG-zOalRAlF8E5BxXvQ88OHMMA-GgU",
  authDomain: "learner-edge-client.firebaseapp.com",
  projectId: "learner-edge-client",
  storageBucket: "learner-edge-client.appspot.com",
  messagingSenderId: "707336536985",
  appId: "1:707336536985:web:90421aeaabed0edc218908",
};

const app = initializeApp(firebaseConfig);

export default app;