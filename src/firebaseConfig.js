import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDyL_H7jjpMY773eLr71uyJmVhL85TDluk',
  authDomain: 'listed-dashboard-115de.firebaseapp.com',
  projectId: 'listed-dashboard-115de',
  storageBucket: 'listed-dashboard-115de.appspot.com',
  messagingSenderId: '850750263622',
  appId: '1:850750263622:web:212758006b162a6fd41547',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
