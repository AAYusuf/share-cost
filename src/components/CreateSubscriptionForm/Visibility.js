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

const  Visibility = ({nextStep, prevStep, handleChange, visibility}) =>{
    return(
        <div className="animate__animated animate__fadeInUp">
            <Row className="mb-6">
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
            
            <Row className="py-3 align-items-center mb-6">
              <Col sm="9">
                <h4 className="display-4 mb-0">Visibility for Your Subscription </h4>
              </Col>
            </Row>
            
            <Form>
                <Row className="mb-6">
                    <Col md="5">
                      <Label check>
                        <Card className=" shadow border-0 card-lift--hover">
                            <CardBody className="py-4">
                                <FormGroup check>
                                    <Input
                                        name="visibility"
                                        type="radio"
                                        value='public'
                                        checked={visibility=='public'?true:false}
                                        onChange={handleChange}
                                        onClick={nextStep}
                                    />
                                    <h3 className="heading mb-0">Public</h3>
                                        <p> 
                                        Your subscription will be displayed in the list of 
                                        available subscriptions on the site
                                        </p>
                                </FormGroup>
                            </CardBody>
                         </Card>   
                    </Label>
                    
                    </Col>
                    <Col md="5">
                     <Label check>
                         <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-4">
                                <FormGroup check>
                                    <Input
                                        name="visibility"
                                        type="radio"
                                        value="private"
                                        checked={visibility=='private'?true:false}
                                        onChange={handleChange}
                                        onClick={nextStep}
                                    />
                                    <h3 className="heading mb-0">Private</h3>
                                   
                                        <p>
                                        Only people to whom you communicate the secure link 
                                         can join your subscription
                                        </p>
                                </FormGroup>
                            </CardBody>
                         </Card>   
                     </Label>
                    </Col>
                </Row>
            </Form>
            
            {/* <Row className="mt-3">
                <Col xs="4">
                    <div className="text-left">
                        <Button
                            
                            color="primary"
                            type="button"
                            onClick={nextStep}
                            >
                           Next Step
                        </Button>
                    </div>
                </Col>
            </Row> */}
        </div>
    );
}

export  default Visibility;