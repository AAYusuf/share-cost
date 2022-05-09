import {
    Button,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Label,
  } from "reactstrap";
const  Price = ({nextStep, prevStep, handleChange, priceType, subscriptionPrice, availablePlaces, totalPlaces}) =>{
    return(
        <div>
            <h3>Subscription Price</h3>
            <Form>
                <Row>
                    <Col md="4">
                    <FormGroup check>
                        <Input
                            name="priceType"
                            type="radio"
                            value="fixed"
                            checked={priceType=='fixed'?true:false}
                            onChange={handleChange}
                        />
                        <b>Fixed Price Per Subscriber</b> 
                        <Label check>
                        The price of the subscription is divided by the maximum number of 
                        participants, and will not change. ** Recommanded if public **
                        </Label>
                    </FormGroup>
                    </Col>
                    <Col md="4">
                    <FormGroup check>
                        <Input
                           name="priceType"
                           type="radio"
                           value="variable"
                           checked={priceType=='variable'?true:false}
                           onChange={handleChange}
                        />
                        <b>Variable Price - Equal Split</b> 
                        <Label check>
                        The subscription price is divided by the number of active participants. 
                        It will vary according to their number. Ideal for families.
                        </Label>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
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

export  default Price;