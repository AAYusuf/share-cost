import {
    Button,
    FormGroup,
    Form,
    Input,
    Label,
    Row,
    Col
  } from "reactstrap";
  import { useState } from 'react';

const  SubscriptionInfo = ({nextStep, prevStep, handleChange, subscriptionTitle, subscriptionDescription}) =>{
    const [titleError, settitleError] = useState(false);
    const [descriptionError, setdescriptionError] = useState(false);
   
    const validate = () =>{
        if(!subscriptionTitle ||  subscriptionTitle.trim() == "" || !subscriptionDescription || subscriptionDescription.trim() == ""){
            settitleError(true)
            }
    //   nextStep()
    }
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
            <Row className="py-3 align-items-center">
              <Col sm="9">
                <h4 className="display-4 mb-0">Describe Your Subscription</h4>
              </Col>
            </Row>
            <Form>
                <Row>
                    <Col md="9">
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
                         <span className="text-danger">{titleError?"This field is required":""}</span>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <FormGroup>
                        <Label for="exampleText">
                       Account Description 
                        </Label>
                        <Input
                        id="subscriptionDescription"
                        name="subscriptionDescription"
                        type="textarea"
                        rows="5"
                        value={subscriptionDescription}
                        onChange={handleChange}
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mt-3">
                <Col md="4">
                    <div className="text-left">
                        <Button
                            color="primary"
                            type="button"
                            onClick={validate}
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