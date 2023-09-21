import { db, storage } from './base'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  query,
  where,
  documentId,
  type Query,
  type QuerySnapshot,
  type DocumentData,
} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { IFriend, IUser, IUserReview } from '../types/responses'
import { FirebaseEndpoints } from './endpoints'

export enum COLLECTIONS {
  USERS = 'users',
  REVIEWS = 'reviews',
}

const getCollectionRef = (colName: COLLECTIONS) => collection(db, colName)
export async function getDocsInfo<T>(ref: Query, fields?: string[]): Promise<T[]> {
  const docsSnapshot: QuerySnapshot<DocumentData, DocumentData> = await getDocs(ref)
  const allDocs: T[] = docsSnapshot.docs.map(doc => {
    const all = doc.data()
    let needed = all

    if (fields) {
      needed = {}
      fields.forEach(field => {
        needed[field] = all[field]
      })
    }
    return { ...needed, id: doc.id } as T
  })

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

const addUser = async (userData: Pick<IUser, 'name' | 'surname'>): Promise<IUser | null> => {
  const colRef = await getCollectionRef(COLLECTIONS.USERS)
  const docRef = await addDoc(colRef, userData)
  return await getUser(docRef.id)
}

const refreshUser = async (id: string, data: Partial<IUser>): Promise<void> => {
  await updateDocInfo(id, COLLECTIONS.USERS, data)
}

const getUserReviews = async (): Promise<IUserReview[]> => {
  return await getDocsInfoWithCol<IUserReview>(COLLECTIONS.REVIEWS)
}

const getUserFriends = async (friendsId: string[]): Promise<IFriend[]> => {
  const q = query(getCollectionRef(COLLECTIONS.USERS), where(documentId(), 'in', friendsId))
  const d = await getDocsInfo<IFriend>(q, ['name', 'surname', 'img'])

  return d
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
  addUser,
  refreshUser,
  uploadProfileImg,
  getUserReviews,
  getUserFriends,
}
