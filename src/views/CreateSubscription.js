import react from 'react'
import { Container, Row, Col, List } from 'reactstrap'
import Price from '../components/CreateSubscriptionForm/Price';
import Category from '../components/CreateSubscriptionForm/Category';
import SubscriptionInfo from '../components/CreateSubscriptionForm/SubscriptionInfo';
import Visibility from '../components/CreateSubscriptionForm/Visibility';
import LoginDetails from '../components/CreateSubscriptionForm/LoginDetails';
import { ToastContainer, toast } from 'react-toastify';
import {db} from '../firebase-config';
import {collection, addDoc,} from 'firebase/firestore';
import { serverTimestamp } from '@firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";



export default class CreateSubscription extends react.Component{
    constructor(props) {
        super(props);
        this.state = {step: 1,
                      category:'tv',
                      subscriptionTitle:'',
                      subscriptionDescription:'This is a test',
                      visibility:'private',
                      priceType:'fixed', //fixed or variable
                      subscriptionPrice: 5000,
                      availablePlaces: 3,
                      totalPlaces: 3,
                      loginType: 'same', // Same login /  One login per subscriber
                      loginDetails:'Hello world',
                      userId:"",
                      formFieldError: false,
                      done: false,
                      notDone: false

         };
      }

      
// go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
// go back to previous step
    nextStep = () => {
         const { step } = this.state;
         this.setState({ step: step + 1 });
        
    }

    // form validation
    validate = () => {
    switch (this.state.step) {
        case 2:
            if(!this.state.subscriptionTitle || this.state.subscriptionTitle .trim() == ""){
                console.log("empty")
                this.setState(()=>{return{formFieldError:true}})
                return "First name is Required";
            } else {
                return "";
                }
    }
}

// handle field change
    handleChange =  e => {
        this.setState({ [e.target.name]: e.target.value });

        
    }
    

// handle create subcription form submission
 createSubscription = ()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, async(authUser) => {
        if (authUser) {
            const usersCollectionRef = collection(db, "subscriptions");
                 await addDoc(usersCollectionRef, {
                    category:this.state.category,
                    subscriptionTitle:this.state.subscriptionTitle,
                    subscriptionDescription: this.state.subscriptionDescription,
                    visibility: this.state.visibility,
                    priceType: this.state.priceType,
                    subscriptionPrice: this.state.subscriptionPrice,
                    availablePlaces: this.state.availablePlaces,
                    priceType: this.state.priceType,
                    totalPlaces: this.state.totalPlaces,
                    loginType: this.state.loginType,
                    loginDetails:this.state.loginDetails,
                    userId:authUser.uid,
                    createdAt: serverTimestamp(),
                   
                }) .then((response) => {
                    toast('success');
                    this.setState({ done: true });                    
                  })
                  .catch((error) => {
                      toast.error(error.code);
                      this.setState({ notDone: true });
                    })
        } 
        else{
            console.log("none")  ;
        }
        })
    
    
    //
       
         
        } 
    
        
          
    

// handle form
    handleForm = () =>{
        switch (this.state.step) {
            case 1:
                return(
                    <Container>
                        <Row>
                            <Col>
                                <Category
                                    nextStep = {this.nextStep}
                                    handleChange = {this.handleChange}
                                />
                            </Col>
                        </Row>
                    </Container>
                )
            case 2:
                return(
                    <Container>
                        <Row>
                            <Col>
                              <SubscriptionInfo
                                 nextStep = {this.nextStep}
                                 prevStep = {this.prevStep}
                                 handleChange = {this.handleChange}
                                 subscriptionTitle = {this.state.subscriptionTitle}
                                 subscriptionDescription = {this.state.subscriptionDescription}
                              />
                            </Col>
                        </Row>
                    </Container>
                )
            case 3:
            return(
                <Container>
                    <Row>
                        <Col>
                            <Visibility
                             nextStep = {this.nextStep}
                             prevStep = {this.prevStep}
                             handleChange = {this.handleChange}
                             visibility = {this.state.visibility}
                            />
                        </Col>
                    </Row>
                </Container>
            )
            case 4:
                return(
                    <Container>
                        <Row>
                            <Col>
                                <Price
                                 nextStep = {this.nextStep}
                                 prevStep = {this.prevStep}
                                 handleChange = {this.handleChange}
                                 priceType = {this.state.priceType}
                                 subscriptionPrice = {this.state.subscriptionPrice}
                                 availablePlaces = {this.state.availablePlaces}
                                 totalPlaces = {this.state.totalPlaces}
                                />
                            </Col>
                        </Row>
                    </Container>
                )
                case 5:
                return(
                    <Container>
                        <Row>
                            <Col>
                                <LoginDetails
                                 prevStep = {this.prevStep}
                                 handleChange = {this.handleChange}
                                 loginType ={this.state.loginType}
                                 loginDetails ={this.state.loginDetails}
                                 createSubscription={this.createSubscription}
                                />
                            </Col>
                        </Row>
                    </Container>
                )
                default:
            }

    }
    handleAsideMenu = (e) =>{
        if(e.target.id> this.state.step){
            return
        }
        this.setState({step :Number(e.target.id)})
    }

    displayMenuIcon = (position) =>{
        
            if(this.state.step == position){
                return(  
                <i className="fa fa-arrow-right animate__animated  animate__fadeInLeft"></i>
                )
            }
            else if(this.state.step > position)
            return(  
                <i className="fa-solid fa-circle-check animate__animated animate__fadeInUp"></i>
            )
        
    }
   
    
    render(){
        let { done } = this.state;
        return(
            <div>
                 <Row style={{ height: '100vh' }}>
                    <Col className="col-md-3 d-flex align-items-center mx-auto justify-content-center" >
                        <List type="unstyled">
                            <li className="cs-list-item" id= "1" onClick={this.handleAsideMenu}>
                             {this.displayMenuIcon(1)}  Category
                            </li>
                            <li className="cs-list-item" id= "2" onClick={this.handleAsideMenu}>
                             {this.displayMenuIcon(2)}   Subscription Information
                            </li>
                            <li className="cs-list-item" id= "3" onClick={this.handleAsideMenu}>
                             {this.displayMenuIcon(3)}   Visibility
                            </li>
                            <li className="cs-list-item" id= "4" onClick={this.handleAsideMenu}> 
                            {this.displayMenuIcon(4)}   Price
                            </li>
                            <li className="cs-list-item" id= "5" onClick={this.handleAsideMenu}>
                            {this.displayMenuIcon(5)}  Login Details
                            </li>
                        </List>
                    </Col>
                    <Col className="d-flex align-items-center mx-auto justify-content-center" style={{ backgroundColor: '#F0F0F0'}} >
                        {this.handleForm()}
                        {done && (<Navigate to="/my-subscriptions" replace={true} />)}
                    </Col>
                </Row>
                <ToastContainer />
            </div>
       
        )
        
               
    }
}
