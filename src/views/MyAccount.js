import React, {useEffect,useState} from 'react';
import DemoNavbar from '../components/Navbar';
import {Container} from 'reactstrap'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getAuthenticatedUser} from '../assets/utilities/utilityFunctions'

const MyAccount = () =>{

const [currentUser, setCurrentUser] = useState()
const auth = getAuth();
    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    }, [])
    return(
        <div>
             <DemoNavbar />
             <Container>
                 My Account 
             </Container>
            
        </div>
    )
}
export default MyAccount