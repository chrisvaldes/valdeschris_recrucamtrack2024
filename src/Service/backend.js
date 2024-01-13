import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from './firebase'; // Importez votre instance Firestore depuis le fichier firebase.js

export const insertData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log('Données insérées avec succès. ID du document :', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error);
    throw error;
  }
};

export const updateData = async (collectionName, docId, data) => {
  try {
    const docRef = doc(database, collectionName, docId);
    await updateDoc(docRef, data);
    console.log('Données mises à jour avec succès.');
  } catch (error) {
    console.error('Erreur lors de la mise à jour des données :', error);
    throw error;
  }
};

export const deleteData = async (collectionName, docId) => {
  try {
    const docRef = doc(database, collectionName, docId);
    await deleteDoc(docRef);
    console.log('Données supprimées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la suppression des données :', error);
    throw error;
  }
};