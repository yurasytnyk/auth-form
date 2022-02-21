import { 
  collection, 
  CollectionReference,
  getFirestore,
} from 'firebase/firestore';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { firebase } from '../config/config';

export class FirebaseClient {
  static db = getFirestore(firebase);
  static auth = getAuth();

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
}