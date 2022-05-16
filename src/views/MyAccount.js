import React, {useEffect,useState} from 'react';
import DemoNavbar from '../components/Navbar';
import {Container, Table} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'

const MyAccount = () =>{
    const {currentUser} = useAuth()
    console.log(currentUser)
    return(
        <div>
             <DemoNavbar />
             <Container>
               <Table className="table">
                   <tbody>
                    <tr>
                        <td><b>Username</b></td>
                        <td>{currentUser?currentUser.email:""}</td>
                    </tr>
                    <tr>
                        <td><b>Created At</b></td>
                        <td>{currentUser?currentUser.metadata.creationTime:""}</td>
                    </tr>
                    <tr>
                         <td><b>Last Login</b></td>
                        <td>{currentUser?currentUser.metadata.lastSignInTime:""}</td>
                    </tr>
                   </tbody>
               </Table>
             </Container>
            
        </div>
    )
}
export default MyAccount