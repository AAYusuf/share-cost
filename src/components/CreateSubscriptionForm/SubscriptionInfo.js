import {
    Button,
    FormGroup,
    Form,
    Input,
    Label,
    Row,
    Col
  } from "reactstrap";

const  SubscriptionInfo = ({nextStep, prevStep, handleChange, subscriptionTitle, subscriptionDescription}) =>{
    return(
        <div>
            <h3>Describe Your Subscription</h3>
            <Form>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Label for="exampleText">
                           Account Title (Give it a short Name)
                            </Label>
                            <Input
                            id="subscriptionTitle"
                            name="subscriptionTitle"
                            type="text"
                            value={subscriptionTitle}
                            onChange={handleChange}
                            />
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
                        id="subscriptionDescription"
                        name="subscriptionDescription"
                        type="textarea"
                        value={subscriptionDescription}
                        onChange={handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mt-3">
                <Col md="3">
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
                <Col md="3">
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
          </Form>
           
        </div>
    );
}

export  default SubscriptionInfo;