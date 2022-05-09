import React, {useEffect,useState}from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase-config';
import DemoNavbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import {collection, addDoc,} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { serverTimestamp } from '@firebase/firestore'
import { useNavigate } from "react-router-dom";
import {Container,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    Form,
    Input
    } from 'reactstrap'




export default function JoinSubscription(){

    const params = useParams();
    const [sub, setSub] = useState({})
    let navigate = useNavigate();


     //get subscription details
    useEffect(() => {
        const  getSubscription = async () => {
            
            const docRef = doc(db, "subscriptions", params.id);
            const docSnap = await getDoc(docRef);
            setSub(docSnap.data())
         };
         getSubscription();
         
        
    },[])


    //subscribe to a subscription
    const subscribe = () =>{
        const auth = getAuth();
        // get logged in user
        onAuthStateChanged(auth, async(authUser) => {
            if (authUser) {
                //begin cash transaction, on success
                //insert userId and Subid in join table with transaction id
                let   userId = authUser.uid;
                let   subscriptionId = params.id;
                let transactionId= "123"
                const usersCollectionRef = collection(db, "junctionUserSubscription");
                await addDoc(usersCollectionRef, {
                    userId,
                    subscriptionId,
                    transactionId,
                    createdAt: serverTimestamp(),
                    
                }) .then((response) => {
                    navigate('/home')
                    toast('success');
                    })
                    .catch((error) => {
                        toast.error(error.code);
                    })
            } 
            else{
                //navigate to login page
                console.log("none")  ;
            }
            })
       
    }



    return(
        <div>
            <DemoNavbar />
            <Container>
            <Row className="mt-5">
                <Col md='7'>
                    <Card body>
                        <CardHeader>
                            Contact and Billing Information
                        </CardHeader>
                        <Form>
                            <Row className="mt-3">
                                <Col>
                                    <Input placeholder="first Name" /> 
                                </Col>
                                <Col>
                                    <Input placeholder="Last Name" /> 
                                </Col>
                            </Row> 
                            <Row className="mt-3">
                                <Col>
                                    <Input placeholder="Phone" /> 
                                </Col>
                                <Col>
                                    <Input placeholder="Address" /> 
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <Input placeholder="others" /> 
                                </Col>
                            </Row>
                        </Form>
                             
                    </Card>
                </Col>
                <Col md='5'>
                    <Card body>
                        <CardHeader>
                            {sub.subscriptionPrice}
                        </CardHeader>
                        <ul>
                            <li>
                            <b>Title :</b> {sub.subscriptionTitle}
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
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md='7'>
                    <Card body>
                        <CardHeader>
                           Billing Details
                        </CardHeader>
                        <Form>
                            <Row className="mt-3">
                                <Col>
                                    <Input placeholder="Card Number" /> 
                                </Col>
                               
                            </Row> 
                            <Row className="mt-3">
                                <Col>
                                    <Input placeholder="Expiration Date" /> 
                                </Col>
                                <Col>
                                    <Input placeholder="cvv" /> 
                                </Col>
                            </Row>
                         </Form>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Button onClick={subscribe}>
                    Subscribe
                </Button>
            </Row>
            </Container>
            <ToastContainer />
        </div>
    )
}