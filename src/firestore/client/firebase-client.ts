import { 
  collection, 
  CollectionReference,
  getFirestore,
} from 'firebase/firestore';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { firebase } from '../config/config';

export class FirebaseClient {
  static db = getFirestore(firebase);
  static auth = getAuth(firebase);
  static provider = new GoogleAuthProvider();

  static createCollection<T>(collectionName: string) {
    return collection(FirebaseClient.db, collectionName) as CollectionReference<T>;
  }

  static async signUp(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(FirebaseClient.auth, email, password);
      
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async signIn(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(FirebaseClient.auth, email, password);
      
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async signInWithGoogle() {
    try {
      const response = await signInWithPopup(FirebaseClient.auth, FirebaseClient.provider);
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential?.accessToken;

      return token;
    } catch (error) {
      console.error(error);
    }
  }

  static async signOut() {
    try {
      await signOut(FirebaseClient.auth);
    } catch (error) {
      console.error(error);
    }
  }
}