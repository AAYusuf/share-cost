import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider } from 'firebase/auth';
import {
    Alert,
    Button,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    Label
  } from "reactstrap";
import google from '../../assets/images/icons/google.svg';
import connect from '../../assets/images/icons/connect.png'; 
import './Login.css';


export default function Login(){
 const {login} = useAuth()
 const {loginWithGoogle} = useAuth()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 let navigate = useNavigate();
 const {currentUser} = useAuth()
 const {error} = useAuth()
 const [loading, setloading] = useState(false)
 
    
     const handleLogin =  () =>{
        login( email, password)
     }

     const handleGoogleLogin = () =>{
      loginWithGoogle()
     }

    return(
      <div className="login-main justify-content-center align-items-center">
        <div className="login-container">
           <Container className=" pt-lg-12">
             <Row>
               <Col className="" lg='6'>
                 <div className="logo"> 
                    <h2>WE<b>SHARE</b></h2>
                </div>
                <div className="connect text-center mt-4">
                  <img alt="google"src={connect}/>
                </div>
                {/* <div className="caption text-center mt-3 font-weight-lighter">
                  Connect with your <br/>friends and family
                </div> */}
               </Col>
               <Col className="mr-4" md='6'>
               <Container className=" pt-lg-12">
                 <Row className="justify-content-center align-items-center">
                    <Col lg="12">
                      <h4 className="mt-5">Login to your Account</h4>
                   

                      {error && <Alert className="alert-danger">{error }</Alert>}

                     
                      <Form role="form" >
                        <FormGroup className="mt-3">
                          <label className="custom-control-label small" htmlFor=" email">
                            <span>Email</span>
                          </label>
                          <InputGroup className="input-group-alternative" size='lg'>
                            <Input placeholder="Email" type="email" 
                            onChange={(event)=>{
                              setEmail(event.target.value)
                            }}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mt-3">
                          <label className="small custom-control-label" htmlFor=" email">
                            <span>Password</span>
                          </label>
                          <InputGroup className="input-group-alternative" size='lg'>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                onChange={(event)=>{
                                  setPassword(event.target.value)
                                }}
                              />
                          </InputGroup>
                        </FormGroup>
                        <div className="mt-3 pl-3 custom-control custom-control-alternative custom-checkbox">
                        <Label check>
                          <Input type="checkbox" />{' '}
                           <span><small>REMEMBER ME</small></span>
                        </Label>
                        </div>
                        <div className="text-center">
                          <Button
                            type="button"
                            className="login-button my-4 "
                            onClick={handleLogin}
                            disabled={loading}
                            block
                          >
                            Login 
                          </Button>

                          <Button
                            type="button"
                            className="bi bi-google login-google my-4 "
                            onClick={handleLogin}
                            disabled={loading}
                            block
                          >
                            <span className="btn-inner--icon">
                              <img alt="google"src={google} height="20px"/>
                            </span>
                             Continue with Google 
                          </Button>
                        </div> 
                      </Form>
                    
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-dark"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-dark"
                        href="#pablo"
                       
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
               </Col>
             </Row>
           </Container>
         
        
         
        </div>
        
        
      </div>
       
    )
}