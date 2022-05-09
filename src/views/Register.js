import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Alert
  } from "reactstrap";

  //images
  import github from '../assets/images/icons/github.svg';
  import google from '../assets/images/icons/google.svg';

export default function Register(){
    const {signup} = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, seterror] = useState("")
    const [isLoading, setisLoading] = useState(false)
    let navigate = useNavigate();

   
        // const handleUserRegistration = () =>{
        //     const authentication = getAuth();
        //     createUserWithEmailAndPassword(authentication, email, password)
        //         .then((response) => {
        //             navigate('/home')
        //             sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        //         }).catch((error) => {
        //             console.log(error.code)
        //             if (error.code === 'auth/email-already-in-use') {
        //             //   toast.error('Email Already in Use');
        //             }
        //         })
        // }
        
        const handleSubmit = async () =>{

          try{
            setisLoading(true)
            seterror("")
            await signup(email, password)
            navigate('/home')
          }
          catch{
            seterror("Failed to create an account")
          }
          setisLoading(false)
        }
    
      

    return(
        <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign up with</small>
                </div>
                <div className="text-center">
                  <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={github}
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
                        src={google}
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                {error && <Alert variant="danger">{error }</Alert>}
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                </div>
                <Form role="form" onSubmit={handleSubmit}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                     
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                     
                      <Input placeholder="Email" 
                             type="email"
                             onChange={(event)=>{
                                setEmail(event.target.value)}}/>

                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                     
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                     
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={(event)=>{
                            setPassword(event.target.value)}}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-muted font-italic">
                    <small>
                      password strength:{" "}
                      <span className="text-success font-weight-700">
                        strong
                      </span>
                    </small>
                  </div>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span>
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button
                      disabled={isLoading}
                      className="mt-4"
                      color="primary"
                      type="submit"
                      // onClick={handleUserRegistration}
                    >
                      Create account
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}