// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

const IndexCards = () =>{
    return(
        <section className="section section-lg pt-lg-0">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="6">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-check-bold" />
                      </div>
                      <h6 className="text-primary text-uppercase">
                       Share Sbscription
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap
                        4 that includes the most important components and
                        features.
                      </p>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                       Share
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-istanbul" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        Subscribe to one
                      </h6>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap
                        4 that includes the most important components and
                        features.
                      </p>
                      <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                       Subscribe
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}
export default IndexCards