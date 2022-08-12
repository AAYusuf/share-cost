import React from 'react';
import {useState, useEffect} from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SubscriptionCard from "../components/SubscriptionCard";
import { Container,Row, Col } from "reactstrap";
import { getAuth } from "firebase/auth";
import {db} from '../firebase-config';
import {collection, query,  getDocs} from 'firebase/firestore';
import {  Link } from 'react-router-dom'
import Filters from '../components/Filters';
import Categories from '../components/Categories';



export default function Home(){
    const [subscriptions, setSubscriptions] = useState([]);
    const auth = getAuth();
    

    useEffect(() => {
        
       getSubscriptions();  
           
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
              <Col md='4' className="mt-3" key={sub.id}>
                  <Link to={'/subscription/'+sub.id}>
                      <SubscriptionCard sub={sub}/>
                  </Link>
              </Col>)
          
        }
        
    }

    return(
        <div>
            <Navbar />
            <Container>
                <Row className="row-grid justify-content-center mt-4">
                    <Col className="text-center" lg="10">
                        <h2 className="display-3">
                        Do you love this awesome{" "}
                        <span className="text-success">
                            Design System for Bootstrap 4?
                        </span>
                        </h2>
                        <p className="lead">
                        Discover a range of free learning content designed to help
                        grow your business or jumpstart your career. You can learn 
                        by selecting individual modules, or dive right in and take 
                        an entire course end-to-end.
                        </p>
                    </Col>
                  </Row>
                    <SearchBar/>
                    <Categories/>
                    <Filters/>

                    <hr/>
                    <Row>
                    {renderSubscriptions()}
                    </Row>

                 
               
            </Container>
        </div>
    )

}