import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocFromServer,
  query,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Perfume } from '../types';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore with explicit database ID from config
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Standardized Error Handler according to skill spec
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errMessage = error instanceof Error ? error.message : String(error);
  const errInfo: FirestoreErrorInfo = {
    error: errMessage,
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.warn(`[Firestore ${operationType} on ${path}]:`, errMessage);
  return errInfo;
}

// Connection test helper
export async function testFirestoreConnection() {
  try {
    const colRef = collection(db, 'productos');
    await getDocs(colRef);
    console.log('Firestore initialized successfully');
  } catch (error) {
    console.warn('Firestore operating in local/offline fallback mode:', error instanceof Error ? error.message : error);
  }
}

// Fetch all perfumes from Firestore
export async function getPerfumesFromFirestore(): Promise<Perfume[]> {
  try {
    const colRef = collection(db, 'productos');
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      return [];
    }
    const perfumes: Perfume[] = [];
    snapshot.forEach((d) => {
      perfumes.push({ id: d.id, ...d.data() } as Perfume);
    });
    return perfumes;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'productos');
    return [];
  }
}

// Save or bulk update perfumes in Firestore
export async function savePerfumesToFirestore(perfumes: Perfume[]): Promise<boolean> {
  try {
    for (const item of perfumes) {
      const docRef = doc(db, 'productos', item.id);
      await setDoc(docRef, item, { merge: true });
    }
    return true;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'productos');
    return false;
  }
}

// Delete a perfume from Firestore
export async function deletePerfumeFromFirestore(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, 'productos', id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `productos/${id}`);
    return false;
  }
}

// Record a sale/order in Firestore
export async function recordSaleInFirestore(saleData: any): Promise<string> {
  try {
    const colRef = collection(db, 'ventas');
    const docRef = await addDoc(colRef, {
      ...saleData,
      fecha_venta: new Date().toISOString(),
      estado_pedido: saleData.estado_pedido || 'Pagado'
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, 'ventas');
    return '';
  }
}
