
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyARHCisxCkgS6G8r9iLDLDsIjxs6sHk2K4",
  authDomain: "netflix-clone-eb6d1.firebaseapp.com",
  projectId: "netflix-clone-eb6d1",
  storageBucket: "netflix-clone-eb6d1.firebasestorage.app",
  messagingSenderId: "174012840103",
  appId: "1:174012840103:web:aaa3e9fb152fc504654382"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth,email,password)
        const user = response.user;
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            email,
            authProvider:'local'
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}


const logout = async () => {
    signOut(auth);
}

export { signup, login, logout ,auth , db }