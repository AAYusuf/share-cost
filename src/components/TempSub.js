import React, {useState, useEffect} from 'react'
import { Container, Row, Col, List } from 'reactstrap'
import Price from './CreateSubscriptionForm/Price';
import Category from './CreateSubscriptionForm/Category';
import SubscriptionInfo from './CreateSubscriptionForm/SubscriptionInfo';
import Visibility from './CreateSubscriptionForm/Visibility';
import LoginDetails from './CreateSubscriptionForm/LoginDetails';
import { ToastContainer, toast } from 'react-toastify';


const TempSub = () =>{
    const [values, setvalues] = useState({
        step:1,
        category:'tv',
        subscriptionTitle:'Test',
        subscriptionDescription:'This is a test',
        visibility:'private',
        priceType:'fixed', //fixed or variable
        subscriptionPrice: 0 ,
        availablePlaces:0,
        totalPlaces:0,
        loginType: 'same', // Same login /  One login per subscriber
        loginDetails:'Hello world',
        userId:""
    });
    
   

// go back to previous step
   const prevStep = () => {
        setvalues({ step:  1 });
    }
// go back to previous step
   const nextStep = () => {
     setvalues({ step: [values.step + 1] });
    }

// handle field change
   const handleChange =  (e) => {
    setvalues({ [e.target.name]: e.target.value });
    }

// handle form
const handleForm = () =>{
    console.log(values)
    switch (values.step) {
        case 1:
            return(
                <Container>
                    <Row>
                        <Col>
                            <Category
                                nextStep = {nextStep}
                                handleChange = {handleChange}
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
                             nextStep = {nextStep}
                             prevStep = {prevStep}
                             handleChange = {handleChange}
                             subscriptionTitle = {(values.subscriptionTitle)}
                             subscriptionDescription = {values.subscriptionDescription}
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
                         nextStep = {nextStep}
                         prevStep = {prevStep}
                         handleChange = {handleChange}
                         visibility = {values.visibility}
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
                             nextStep = {nextStep}
                             prevStep = {prevStep}
                             handleChange = {handleChange}
                             priceType = {values.priceType}
                             subscriptionPrice = {values.subscriptionPrice}
                             availablePlaces = {values.availablePlaces}
                             totalPlaces = {values.totalPlaces}
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
                             prevStep = {prevStep}
                             handleChange = {handleChange}
                             loginType ={values.loginType}
                             loginDetails ={values.loginDetails}
                             createSubscription={values.createSubscription}
                            />
                        </Col>
                    </Row>
                </Container>
            )
            default:
        }
}

//control aside menu
   const handleAsideMenu = (e) =>{
        setvalues({step :Number(e.target.id)})
    }

    return(
        <div>
             <Row style={{ height: '100vh' }}>
                <Col className="col-md-3 no-float" >
                    <List type="styled">
                        <li className="cs-list-item" id= "1" onClick={handleAsideMenu}>
                            Category
                        </li>
                        <li className="cs-list-item" id= "2" onClick={handleAsideMenu}>
                            Subscription Information
                        </li>
                        <li className="cs-list-item" id= "3" onClick={handleAsideMenu}>
                            Visibility
                        </li>
                        <li className="cs-list-item" id= "4" onClick={handleAsideMenu}> 
                            Price
                        </li>
                        <li className="cs-list-item" id= "5" onClick={handleAsideMenu}>
                            Login Details
                        </li>
                    </List>
                </Col>
                <Col style={{ backgroundColor: '#F0F0F0'}} >
                    {handleForm()}
                </Col>
            </Row>
            <ToastContainer />
        </div>
   
    )
}


export default TempSub;