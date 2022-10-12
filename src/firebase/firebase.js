// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, doc, getDocs, deleteDoc, updateDoc, getFirestore,  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-d9d47.firebaseapp.com",
  projectId: "react-d9d47",
  storageBucket: "react-d9d47.appspot.com",
  messagingSenderId: "430635530613",
  appId: "1:430635530613:web:55083a12480e2daade3b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            title: producto.title,
            price: producto.price,
            img01: producto.img01,
            img02: producto.img02,
            img03: producto.img03,
            stock: producto.stock,
            category: producto.category,
          });
    })
    
}

const getProducto = (id) => {
  getDoc(doc(db,"productos",id))
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  return productos
}

export {db,app, cargarBaseDeDatos, getProducto, getProductos}