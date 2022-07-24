import {
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";
import ill2 from "../../assets/img/ill/ill-2.svg"

const ModernInterface = () =>{
    
    return (
        <section className="section pb-0 bg-gradient-warning">
            <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-lg-2 ml-lg-auto" md="6">
                    <div className="position-relative pl-md-5">
                        <img
                        alt="..."
                        className="img-center img-fluid"
                        src={ill2}
                        />
                    </div>
                    <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                        <div className="d-flex px-3">
                            <div>
                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                               3
                            </div>
                            </div>
                            <div className="pl-4">
                            <h5 className="title text-primary">
                             Collect Payments
                            </h5>
                            <p>
                                The Arctic Ocean freezes every winter and much of
                                the sea-ice then thaws every summer, and that
                                process will continue whatever.
                            </p>
                            <a
                                className="text-primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Learn more
                            </a>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col className="order-lg-1" lg="6">
                    <div className="d-flex px-3">
                        <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-building text-primary" />
                        </div>
                        </div>
                        <div className="pl-4">
                        <h4 className="display-3 text-white">How it Works</h4>
                        {/* <p className="text-white">
                            The Arctic Ocean freezes every winter and much of the
                            sea-ice then thaws every summer, and that process will
                            continue whatever.
                        </p> */}
                        </div>
                    </div>
                    <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                        <div className="d-flex px-3">
                            <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                               1
                            </div>
                            </div>
                            <div className="pl-4">
                            <h5 className="title text-success">
                                Create Subscription
                            </h5>
                            <p>
                                The Arctic Ocean freezes every winter and much of
                                the sea-ice then thaws every summer, and that
                                process will continue whatever.
                            </p>
                            <a
                                className="text-success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Learn more
                            </a>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                        <div className="d-flex px-3">
                            <div>
                            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                2
                            </div>
                            </div>
                            <div className="pl-4">
                            <h5 className="title text-warning">
                              Share Subscription 
                            </h5>
                            <p>
                                The Arctic Ocean freezes every winter and much of
                                the sea-ice then thaws every summer, and that
                                process will continue whatever.
                            </p>
                            <a
                                className="text-warning"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Learn more
                            </a>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                        <div className="d-flex px-3">
                            <div>
                            <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                                4
                            </div>
                            </div>
                            <div className="pl-4">
                            <h5 className="title text-info">
                              Receive Payments 
                            </h5>
                            <p>
                                The Arctic Ocean freezes every winter and much of
                                the sea-ice then thaws every summer, and that
                                process will continue whatever.
                            </p>
                            <a
                                className="text-info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Learn more
                            </a>
                            </div>
                        </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                    />
                </svg>
                </div>
        </section>
    )
}

export default ModernInterface