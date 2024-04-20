import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFSIVp72WgpurI_hff9u1SAk9u9wnF-ko",
  authDomain: "pokedex-2cdf4.firebaseapp.com",
  projectId: "pokedex-2cdf4",
  storageBucket: "pokedex-2cdf4.appspot.com",
  messagingSenderId: "534124880635",
  appId: "1:534124880635:web:2b6b43dcf21acee2a7065e",
  measurementId: "G-6LHQGJ94GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firbaseDB = getFirestore(app)

export const usersRef = collection(firbaseDB,"user")
export const pokemonListRef = collection(firbaseDB,"pokemonList")