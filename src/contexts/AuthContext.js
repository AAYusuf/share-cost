import React, {useContext, useState, useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {
    
    const [currentUser, setcurrentUser] = useState()
    const auth = getAuth();
    const [loading, setloading] = useState(true)


    function signup (email, password){
       return createUserWithEmailAndPassword(auth, email, password)
    }

    function login (email, password){
        signInWithEmailAndPassword(auth, email, password)
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
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}  
        </AuthContext.Provider>
    )
}
