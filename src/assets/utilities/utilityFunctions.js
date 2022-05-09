import { getAuth, onAuthStateChanged } from "firebase/auth";

// returns the signed in user details
export async function getAuthenticatedUser() {
    const auth = getAuth();
    var user = 1  
    onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
            
            return authUser
        } 
        else{
            console.log("none")  ;
        }
        })
}
        




