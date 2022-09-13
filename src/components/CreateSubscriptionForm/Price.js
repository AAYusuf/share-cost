import {
    Button,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Label,
  } from "reactstrap";
  import 'animate.css';
const  Price = ({nextStep, prevStep, handleChange, priceType, subscriptionPrice, availablePlaces, totalPlaces}) =>{
    return(
        <div className="animate__animated animate__fadeInUp">
            <Row className="mb-4 ">
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
            <Row className="py-3 align-items-center mb-4">
              <Col sm="9">
                <h4 className="display-4 mb-0"> Subscription Price</h4>
              </Col>
            </Row>
            <Form>
                {/* <Row className="mb-4">
                    <Col md="5">
                     <Label check>
                        <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-4">
                                 <FormGroup check>
                                    <Input
                                        name="priceType"
                                        type="radio"
                                        value="fixed"
                                        checked={priceType=='fixed'?true:false}
                                        onChange={handleChange}
                                    />
                                    <h3 className="heading mb-0">Fixed Price Per Subscriber</h3> 
                                   
                                        <p>
                                        The price of the subscription is divided by the maximum number of 
                                         participants, and will not change. ** Recommanded if public **
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
                                        name="priceType"
                                        type="radio"
                                        value="fixed"
                                        checked={priceType=='fixed'?true:false}
                                        onChange={handleChange}
                                    />
                                    <h3 className="heading mb-0">Variable Price - Equal Split</h3> 
                                    
                                        <p>
                                        The subscription price is divided by the number of active participants. 
                                         It will vary according to their number. Ideal for families.
                                        </p>
                                </FormGroup>
                            </CardBody>
                        </Card>
                                    </Label>
                    </Col>
                </Row> */}
                <Row>
                    <Col md="5">
                        <FormGroup>
                            <Label for="exampleText">
                            The total price of the subscription
                            </Label>
                            <Input
                            name="subscriptionPrice"
                            id="subscriptionPrice"
                            type="text"
                            value={subscriptionPrice}
                            onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup>
                            <Label for="exampleText">
                            Places available
                            </Label>
                            <Input
                            name="availablePlaces"
                            id="availablePlaces"
                            type="number"
                            value={availablePlaces}
                            onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup>
                            <Label for="exampleText">
                            Total places
                            </Label>
                            <Input
                            name="totalPlaces"
                            id="totalPlaces"
                            type="number"
                            value={totalPlaces}
                            onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <Row> 
                <Col>
            <h6 className="mb-0">Each person will pay you <b>{Math.floor(subscriptionPrice/totalPlaces)}</b>, you will receive <b>{Math.floor((subscriptionPrice/totalPlaces)*availablePlaces)}</b> in total</h6>
                </Col>
            </Row>
            <Row className="mt-3">
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
            </Row>
        </div>
         
    );
}

export  default Price;