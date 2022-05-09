import {
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
        <div>
            <h3>Share Your Login Details</h3>
            <p>Please provide the login info for your subscribers: password, 
                link... Can be edited in your account.</p>
            <Form>
            <Row>
                    <Col md="4">
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
                    </Col>
                    <Col md="4">
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
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup>
                        <Label for="exampleText">
                       Account Description 
                        </Label>
                        <Input
                        name="loginDetails"
                        id="loginDetails"
                        type="textarea"
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
                        I provide reliable information and identity. 
                        I agree to Sharesub Terms and conditions and Stripe Terms of service
                        </Label>
                    </FormGroup>
                    </Col>
                </Row>
                
            </Form>
            <Row className="mt-3">
                <Col xs="4">
                    <div className="text-center">
                        <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={prevStep}
                            >
                           Previous Step
                        </Button>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="text-center">
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