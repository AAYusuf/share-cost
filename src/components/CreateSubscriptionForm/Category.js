import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

export default function Category({nextStep, handleChange}){
    return(
        <Container className="pt-lg-7">
            <Row className="justify-content-center">
                <Col lg="2">
                <div style={{cursor: "pointer" }} >
                  <Card className="shadow border-0"
                  style={{
                    backgroundColor: '#a6a6a6',
                    borderColor: '#333',
                    color:'#f2f2f2'
                }}
                  >
                    <CardBody className="px-lg-3 py-lg-3">
                      <div className="text-center mb-4 mt-4">
                             <h5>TV</h5>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} >
                  <Card className="shadow border-0"
                  style={{
                    backgroundColor: '#a6a6a6',
                    borderColor: '#333',
                    color:'#f2f2f2'
                }}
                  >
                    <CardBody className="px-lg-3 py-lg-3">
                      <div className="text-center mb-4 mt-4">
                             <h5>Music</h5>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} >
                  <Card className="shadow border-0"
                  style={{
                    backgroundColor: '#a6a6a6',
                    borderColor: '#333',
                    color:'#f2f2f2'
                }}
                  >
                    <CardBody className="px-lg-3 py-lg-3">
                      <div className="text-center mb-4 mt-4">
                             <h5>Games</h5>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} >
                  <Card className="shadow border-0"
                  style={{
                    backgroundColor: '#a6a6a6',
                    borderColor: '#333',
                    color:'#f2f2f2'
                }}
                  >
                    <CardBody className="px-lg-3 py-lg-3">
                      <div className="text-center mb-4 mt-4">
                             <h5>Other</h5>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="6">
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
        </Container>
    );
}