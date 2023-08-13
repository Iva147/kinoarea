import { db, storage } from './base'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  type Query,
  type QuerySnapshot,
  type DocumentData,
} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { IUser, IUserReview } from '../types/responses'
import { FirebaseEndpoints } from './endpoints'

export enum COLLECTIONS {
  USERS = 'users',
  REVIEWS = 'reviews',
}

const getCollectionRef = (colName: COLLECTIONS) => collection(db, colName)
export async function getDocsInfo<T>(ref: Query): Promise<T[]> {
  const docsSnapshot: QuerySnapshot<DocumentData, DocumentData> = await getDocs(ref)
  const allDocs: T[] = docsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }) as T)

  return allDocs
}

export async function getDocsInfoWithCol<T>(colName: COLLECTIONS) {
  const colRef = await getCollectionRef(colName)

  return getDocsInfo<T>(colRef)
}

async function getDocInfo<T>(id: string, colName: COLLECTIONS): Promise<T | null> {
  const docRef = doc(db, colName, id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T
  }
  return null
}

async function updateDocInfo<T extends Record<string, any>>(id: string, colName: COLLECTIONS, data: T) {
  const docRef = doc(db, colName, id)
  await updateDoc(docRef, data)
}

const getUser = async (id: string): Promise<IUser | null> => {
  return await getDocInfo(id, COLLECTIONS.USERS)
}

const refreshUser = async (id: string, data: Partial<IUser>): Promise<void> => {
  await updateDocInfo(id, COLLECTIONS.USERS, data)
}

const getUserReviews = async (): Promise<IUserReview[]> => {
  return await getDocsInfoWithCol<IUserReview>(COLLECTIONS.REVIEWS)
}

/* STORAGE */

const uploadProfileImg = async (id: string, file: Blob): Promise<string> => {
  const storageRef = await ref(storage, `${FirebaseEndpoints.STORAGE_PROFILES}/${id}`)
  await uploadBytesResumable(storageRef, file)
  return await getDownloadURL(storageRef)
}

export const FirebaseApi = {
  getCollectionRef,
  getDocsInfo,
  getDocsInfoWithCol,
  getUser,
  refreshUser,
  uploadProfileImg,
  getUserReviews,
}
