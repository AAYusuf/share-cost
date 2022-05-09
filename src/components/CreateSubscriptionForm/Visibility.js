import {
    Button,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Label,
  } from "reactstrap";

const  Visibility = ({nextStep, prevStep, handleChange, visibility}) =>{
    return(
        <div>
             <h3>Describe Your Subscription</h3>
            <Form>
                <Row>
                    <Col md="4">
                    <FormGroup check>
                        <Input
                            name="visibility"
                            type="radio"
                            value='public'
                            checked={visibility=='public'?true:false}
                            onChange={handleChange}
                        />
                        <b>Public</b>
                        <Label check>
                        Your subscription will be displayed in the list of 
                        available subscriptions on the site
                        </Label>
                    </FormGroup>
                    </Col>
                    <Col md="4">
                    <FormGroup check>
                        <Input
                            name="visibility"
                            type="radio"
                            value="private"
                            checked={visibility=='private'?true:false}
                            onChange={handleChange}
                        />
                        <b>Private</b>
                        <Label check>
                        Only people to whom you communicate the secure link 
                        can join your subscription
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
                            onClick={nextStep}
                            >
                           Next Step
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export  default Visibility;