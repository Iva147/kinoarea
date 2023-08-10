import { db } from './base'
import { collection, getDocs, doc, getDoc, updateDoc, type Query } from 'firebase/firestore'
import { IUser } from '../types/responses'

export enum COLLECTIONS {
  USERS = 'users',
}

const getCollectionRef = (colName: COLLECTIONS) => collection(db, colName)
export const getDocsInfo = async (ref: Query) => {
  const docsSnapshot = await getDocs(ref)
  const allDocs = docsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

  return allDocs
}

export const getDocsInfoWithCol = async (colName: COLLECTIONS) => {
  const colRef = await getCollectionRef(colName)

  return getDocsInfo(colRef)
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

export const FirebaseApi = {
  getCollectionRef,
  getDocsInfo,
  getDocsInfoWithCol,
  getUser,
  refreshUser,
}
