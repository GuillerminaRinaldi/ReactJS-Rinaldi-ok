import { db } from './config';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

export const getProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productSnapshot = await getDocs(productsCollection);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);
  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  }
  return null;
};
