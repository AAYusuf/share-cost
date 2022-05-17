import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider } from 'firebase/auth';
import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
import google from '../assets/images/icons/google.svg';


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
        <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={handleGoogleLogin}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={google}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">

                    {error && <Alert className="alert-danger">{error }</Alert>}

                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form" >
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            
                            <Input placeholder="Email" type="email" 
                            onChange={(event)=>{
                              setEmail(event.target.value)
                            }}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            
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
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={handleLogin}
                            disabled={loading}
                          >
                            Login 
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                       
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
    )
}