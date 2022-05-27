import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import {db} from '../firebase-config';
import netflix from '../assets/images/icons/netflix.jpeg';
import { Link } from "react-router-dom";
import { collection, query, where, getDocs, doc, getDoc, deleteDoc} from 'firebase/firestore';
import {useAuth} from '../contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify';

import {Container, 
    Col, 
    Card, 
    CardBody, 
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardImg, 
    Input,
    Table,
    Row} from 'reactstrap';
import DemoNavbar from './Navbar';
import { useNavigate } from "react-router-dom";

function Subscription() {
    const params = useParams();
    const [sub, setSub] = useState({})
    const [subscribedUsers, setsubcribedUsers] = useState([])
    const {currentUser} = useAuth()
    const [isSubscribed, setisSubscribed] = useState(false)
    const subId = params.id;
    let navigate = useNavigate();


    useEffect(() => {
        const  getSubscription = async () => {
            
            const docRef = doc(db, "subscriptions", subId);
            const docSnap = await getDoc(docRef);
            setSub(docSnap.data())
            getSubscribedUsers(subId);
         };
         getSubscription();
        
    },[])


  //get subscribed users for user
  const  getSubscribedUsers = async (subId) => {
    // query by sub id 
    const q = query(collection(db, "junctionUserSubscription"), where("subscriptionId", "==", subId));
    
    //get docs from juchtion collectiom
    const querySnapshot = await getDocs(q);
    
   setsubcribedUsers(...querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));  
   isUserSubscribed() 
  
} 
const renderSubscribedUsers = () =>{
    if(subscribedUsers.length===0){
        return (<p>No Subscribers yet</p>)
         
      }
      else{
    //   return joinedSubs.map((sub, index) => 
    //      <Col  md='3' className="mt-3" key={index}>
    //             <Link to={'/subscription/'+sub.id}>
    //                 <SubscriptionCard sub={sub}/>
    //             </Link>
    //         </Col>)
        
      }
}

const isUserSubscribed = () =>{
  if(subscribedUsers.length===0){
  
  }
  else{
    for(var i = 0; i < subscribedUsers.length; i++) {
        if (subscribedUsers[i].userId === currentUser.uid) {
             setisSubscribed(true)
            
        }

}
  }
}
const getSubscriptionButton = () =>{
    if(isSubscribed){
       return <Button color="primary" tag={Link} to={"/join/subscription/"+params.id}>Unsubscribe</Button>
    }
    else{
        return  <Button color="primary" tag={Link} to={"/join/subscription/"+params.id}> Subscribe Now</Button>
    }
}

//delete subscription

const  deleteSubscription = async() =>{
    await deleteDoc(doc(db, "subscriptions", subId))
        .then((response) => {
            toast('success');
            navigate('/home')
        })
        .catch((error) => {
            toast.error(error.code);
            });
}

    return(
        <div>
            <DemoNavbar />
            <Container> 
                <Row className="mt-5">
                    <Col md='5'>
                        <Card body>
                            <CardImg
                            alt="Card image cap"
                            src={netflix}
                            top
                            width="100%"
                            />
                        </Card>
                    </Col>
                    <Col md='7' >
                        <Col md="12">
                            <Card body>
                                <CardSubtitle className="mb-2 text-muted"  tag="h6">
                                    Subscription Description
                                </CardSubtitle>
                                <CardTitle tag="h5">
                                {sub.subscriptionTitle}
                                </CardTitle>
                                    <ul>
                                        <li>
                                        <b>Price :</b> {sub.subscriptionPrice}/month
                                        </li>
                                        <li>
                                            <b>Category :</b> {sub.category}
                                        </li>
                                        <li>
                                            <b>Description :</b> {sub.subscriptionDescription}
                                        </li>
                                        <li>
                                            <b>Places :</b> {sub.availablePlaces}/{sub.totalPlaces}
                                        </li>
                                        <li>
                                            <b>Login Details :</b>{sub.loginDetails}
                                        </li>
                                    </ul>
                               
                                   {getSubscriptionButton()}
                            </Card>
                        </Col>
                        <Col className="mt-5" md="12">
                            <Card body>
                                <CardSubtitle className="mb-2 text-muted"  tag="h6">
                                    Features
                                </CardSubtitle>
                              
                                    <ul>
                                        <li>
                                        4K, UHD Available
                                        </li>
                                        <li>
                                        Smart TV, Tablet, Mobile Support
                                        </li>
                                        <li>
                                        One Screen at a Time
                                        </li>
                                        <li>
                                        One PERSONAL PROFILE each subscriber
                                        </li>
                                    </ul>
                               
                             </Card>
                        </Col>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md='5' >
                        <Card body>
                            <CardSubtitle className="mb-2 text-muted"  tag="h6">
                                Ask subscription owner a question
                            </CardSubtitle>
                            <CardTitle tag="h5">
                            Questions
                            </CardTitle>
                            <CardText>
                                <Input placeholder="type here..." />                        
                            </CardText>
                                <Button color="primary" >Subscribe Now</Button>
                            
                          
                        </Card>
                    </Col>
                    <Col md='7' >
                        <Card body>
                            <CardSubtitle className="mb-2 text-muted"  tag="h6">
                                Chat section for subscribers only
                            </CardSubtitle>
                            <CardTitle tag="h5">
                            Chat
                            </CardTitle>
                            <CardText>
                                <Input placeholder="type here..." />
                            </CardText>
                            <Button>
                                Send
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                <Col md='12' >
                        <Card body>
                            <CardSubtitle className="mb-2 text-muted"  tag="h6">
                                List of subscribers
                            </CardSubtitle>
                            <CardTitle tag="h5">
                            Subscribers
                            </CardTitle>
                           
                                <Table>
                                    <thead>
                                        <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            First Name
                                        </th>
                                        <th>
                                            Last Name
                                        </th>
                                        <th>
                                            Username
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            Mark
                                        </td>
                                        <td>
                                            Otto
                                        </td>
                                        <td>
                                            @mdo
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            2
                                        </th>
                                        <td>
                                            Jacob
                                        </td>
                                        <td>
                                            Thornton
                                        </td>
                                        <td>
                                            @fat
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            3
                                        </th>
                                        <td>
                                            Larry
                                        </td>
                                        <td>
                                            the Bird
                                        </td>
                                        <td>
                                            @twitter
                                        </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            
                            <Button>
                                Send
                            </Button>
                            <br/>
                            <Button color="danger" onClick={deleteSubscription}>
                                Delete Subscription
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    )

}
export default Subscription