import React from 'react';
import {useState, useEffect} from 'react';
import DemoNavbar from '../components/Navbar'
import SubscriptionCard from "../components/SubscriptionCard";
import { Container,Row, Col } from "reactstrap";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../firebase-config';
import {collection, query,  getDocs} from 'firebase/firestore';
import {  Link } from 'react-router-dom'



export default function Home(){
    const [subscriptions, setSubscriptions] = useState([]);
    const auth = getAuth();
    

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
             let   user = authUser
                getSubscriptions();  
            } 
            else{
                console.log("none")  ;
            }
            })

    }, [])

    //get all Subscriptions 
    const  getSubscriptions = async () => {
        // query by user is
        let q = query(collection(db, "subscriptions"));
  
        //get the docs by query
        const querySnapshot = await getDocs(q);
           
        // setSubscriptions(querySnapshot)
        setSubscriptions(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
        
    };      
    
    //   render all the subscriptions
    const renderSubscriptions = () =>{
        if(subscriptions.length===0){
          return (<p>No Subscriptions</p>)
           
        }
        else{
        return subscriptions.map((sub) => 
              <Col md='6' className="mt-3" key={sub.id}>
                    <SubscriptionCard sub={sub}/>
              </Col>)
          
        }
        
    }

    return(
        <div>
            <DemoNavbar />
            <Container>
            <h3>Home Page </h3> <p>(shows all subscription listed for all users)</p>
                <Row>
                {renderSubscriptions()}
                </Row>
            </Container>
        </div>
    )

}