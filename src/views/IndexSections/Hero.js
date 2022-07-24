import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

import reactWhite from "../../assets/img/brand/argon-react-white.png";
import creativeTimWhiteSlim from "../../assets/img/brand/creativetim-white-slim.png";
import connect from '../../assets/images/icons/connect.png'; 

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-left" lg="6">
                    <h1 className="display-1 text-white">Share the cost of your  Movies</h1>
                    <p className="lead text-white">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Row>
                        <Col >
                          <Button
                            className="btn-white btn-icon mb-3 mb-sm-0 btn-block"
                            color="default"
                            href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                            size="lg"
                          >
                            <span className="btn-inner--text ">Share</span>
                          </Button>{" "}
                        </Col>
                        
                        <Col>
                          <Button
                            className="btn-icon mb-3 mb-sm-0 btn-block"
                            color="github"
                            href="https://github.com/creativetimofficial/argon-design-system-react"
                            size="lg"
                            target="_blank"
                          >
                            
                            <span className="btn-inner--text">
                            Subscribe
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  
                  <Col className="text-right" lg="6"> 
                     <img alt="google"src={connect}/>
                  </Col>

                </Row>
              </div>
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
        </div>
      </>
    );
  }
}

export default Hero;
