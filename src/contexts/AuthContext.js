import React, {useContext, useState, useEffect} from 'react'
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, 
    GoogleAuthProvider
 } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { } from "firebase/auth";




const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {
    
    const [currentUser, setcurrentUser] = useState()
    const auth = getAuth();
    const [loading, setloading] = useState(true)
    let navigate = useNavigate();
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider(); 

    function signup (email, password){
       return createUserWithEmailAndPassword(auth, email, password)
    }

    function login (email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            navigate('/my-account')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          })
          .catch((error) => {
            setError(error.code)
            
        })
       
    }
    function loginWithGoogle(){
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/my-account')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    function logout (){
        return auth.signOut()
    }
    
     useEffect(() => {
       onAuthStateChanged(auth, (authUser) => {
                setcurrentUser(authUser)
                setloading(false)
            })
           
    },[])

    const value ={
        currentUser,
        signup,
        login,
        logout,
        error,
        loginWithGoogle
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}  
        </AuthContext.Provider>
    )
}
