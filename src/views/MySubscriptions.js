import React from 'react';
import {useState, useEffect} from 'react';
import SubscriptionCard from '../components/SubscriptionCard';
import DemoNavbar from '../components/Navbar'
import {db} from '../firebase-config';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {  Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import{
    Container,
    Col,
    Row
} from 'reactstrap';


const MySubscriptions = () =>{
    const [subscriptions, setSubscriptions] = useState([]);
     const auth = getAuth();
    

    


    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
             let   user = authUser
                getSubscriptions(user.uid);  
            } 
            else{
                console.log("none")  ;
            }
            })
      


        
      }, [])

//get Subscriptions for user
    const  getSubscriptions = async (user) => {
        // query by user is
        let q = query(collection(db, "subscriptions"), where("userId", "==",user ));
  
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
                <Col md='3' className="mt-3" key={sub.id}>
                     {console.log(sub)}
                    <Link to={'/subscription/'+sub.id}>
                        <SubscriptionCard sub={sub}/>
                    </Link>
                </Col>)
            
          }
          
      }
      
    return(
        <div>
            <DemoNavbar/>
            <Container>
            <h3>My Subscriptions</h3>
                <Row>
                {renderSubscriptions()}
                </Row>
            </Container>
        </div>
    )

}
export default MySubscriptions;