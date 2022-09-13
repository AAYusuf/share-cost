import {
    Card,
    CardBody,
    Button,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Label,
  } from "reactstrap";

const  LoginDetails = ({ prevStep, handleChange, loginType,loginDetails, createSubscription}) =>{
    
    return(
        <div className="animate__animated animate__fadeIn">
            <Row className="mb-4">
                <Col md="4">
                    <div className="text-left">
                        <Button
                            color="neutral"
                            type="button"
                            onClick={prevStep}
                            >
                                <i className="fa fa-arrow-left mr-3"></i>
                           Previous Step
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="py-3 align-items-center mb-3">
              <Col sm="9">
                <h4 className="display-4 mb-0"> Login Details</h4>
              </Col>
              <p>Please provide the login info for your subscribers: password, 
                link... Can be edited in your account.</p>
            </Row>
            <Form>
            <Row>
                <Col md="4">
                <Card className=" shadow border-0">
                     <CardBody className="py-4">
                                <FormGroup check>
                                    <Input
                                        name="loginType"
                                        type="radio"
                                        value='same'
                                        checked={loginType=='same'?true:false}
                                        onChange={handleChange}
                                    />
                                    {' '}
                                    <Label check>
                                    Same login for all subscribers
                                    </Label>
                                </FormGroup>
                            </CardBody>
                     </Card>
                    </Col>
                    <Col md="4">
                        <Card className=" shadow border-0">
                            <CardBody className="py-4">
                                <FormGroup check>
                                    <Input
                                        name="loginType"
                                        type="radio"
                                        value='different'
                                        checked={loginType=='different'?true:false}
                                        onChange={handleChange}
                                    />
                                    {' '}
                                    <Label check>
                                    One login per subscriber
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md="9">
                        <FormGroup>
                        <Label for="exampleText">
                       Account Description 
                        </Label>
                        <Input
                        name="loginDetails"
                        id="loginDetails"
                        type="textarea"
                        rows='5'
                        value={loginDetails}
                        onChange={handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check>
                            <p>
                            I provide reliable information and identity. 
                            I agree to Sharesub Terms and conditions and Stripe Terms of service
                            </p>
                       </Label>
                    </FormGroup>
                    </Col>
                </Row>
                
            </Form>
            <Row className="mt-3">
                <Col xs="4">
                    <div className="text-left">
                        <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={createSubscription}
                            >
                           Submit
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export  default LoginDetails;