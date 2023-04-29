import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCVmR80U3arhAG2WwN3nNLGAf-h4eRXeGc',
  authDomain: 'blobs-dead-or-alive.firebaseapp.com',
  projectId: 'blobs-dead-or-alive',
  storageBucket: 'blobs-dead-or-alive.appspot.com',
  messagingSenderId: '980146538449',
  appId: '1:980146538449:web:8e04f4d5ee4a2e435342f0',
  measurementId: 'G-T9K99NE6JX',
};

const app = initializeApp(firebaseConfig);

export default app;
