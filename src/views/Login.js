import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAuth} from '../contexts/AuthContext'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

export default function Login(){
 const {login} = useAuth()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 let navigate = useNavigate();
 const [error, seterror] = useState("")
 const [isLoading, setisLoading] = useState(false)
 const {currentUser} = useAuth()
 const auth = getAuth(); 
    
 const handleAction = () => {
        const authentication = getAuth();
         signInWithEmailAndPassword(authentication, email, password)
              .then((response) => {
                navigate('/my-account')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
              })
              .catch((error) => {
                console.log(error.code)
                if(error.code === 'auth/wrong-password'){
                    toast.error('Please check the Password');
                  }
                  if(error.code === 'auth/user-not-found'){
                    toast.error('Please check the Email');
                  }
            })
        }

        // const handleSubmit = async () =>{

        //   try{
        //     setisLoading(true)
        //     seterror("")
        //     await login(email, password)
        //     navigate('/home')
        //   }
        //   catch{
        //     seterror("Failed to create an account")
        //   }
        //   setisLoading(false)
        // }

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
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("../assets/images/icons/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("../assets/images/icons/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">

                    {error && <Alert variant="danger">{error }</Alert>}

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
                            onClick={handleAction}
                          >
                            Sign in
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
              <ToastContainer />
            </Container>
    )
}