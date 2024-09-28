import { collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore';
import { db } from './config';

export const getProducts = async () => {
  const productsCollection = collection(db, 'products'); 
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()  
  }));
  return productsList;
};

export const getProductById = async (id) => {
  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);
  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  } else {
    console.error("El producto no existe");
    return null;
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    return docRef;  
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
