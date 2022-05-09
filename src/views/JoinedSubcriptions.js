import React, {useEffect,useState}from 'react'
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase-config';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import DemoNavbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import SubscriptionCard from '../components/SubscriptionCard';
import {useAuth} from '../contexts/AuthContext'
import{
    Container,
    Col,
    Row
} from 'reactstrap';

export default function JoinedSubscriptions(){

    const [joinedSubs, setjoinedSubs] = useState([])
    const auth = getAuth();
    const {currentUser} = useAuth()

     //get joined subscriptions 
     useEffect(() => {
            if (currentUser) {  
             getJoinedSubscriptions(currentUser.uid);  
            } 
            
    },[])


    //get Subscriptions for user
    const  getJoinedSubscriptions = async (userId) => {
        // query by user is
        const q = query(collection(db, "junctionUserSubscription"), where("userId", "==", userId));
        
        //get docs from juchtion collectiom
        const querySnapshot = await getDocs(q);
        
        // get subscriptions
        const subscriptions =  querySnapshot.docs.filter(document => document.exists)
                                                        .map(async (document) => {
                                                            // get subscription for each instance of data from the junction table
                                                            const docRef = doc(db, "subscriptions", document.data().subscriptionId);
                                                            const docSnap = await getDoc(docRef);
                                                            var temp ={}
                                                            temp= docSnap.data()
                                                            temp.id = docSnap.id
                                                            setjoinedSubs(prevArray =>[...prevArray ,temp] );
                                                            
                                                            
                                                            
                                                   }) 
    } 
    
    const renderJoinedSubscription = () =>{
        if(joinedSubs.length===0){
            return (<p>No Subscriptions</p>)
             
          }
          else{
          return joinedSubs.map((sub, index) => 
             <Col  md='3' className="mt-3" key={index}>
                    <Link to={'/subscription/'+sub.id}>
                        <SubscriptionCard sub={sub}/>
                    </Link>
                </Col>)
            
          }
    }

    return (
        <div>
            <DemoNavbar/>
            <Container>
            <h3>Joined Subscriptions</h3>
                <Row>
                {renderJoinedSubscription()}
                </Row>
            </Container>
        </div>
    )
}