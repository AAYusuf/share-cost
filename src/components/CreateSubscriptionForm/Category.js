import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

export default function Category({nextStep, handleChange}){
  const handleCategoryClick = (Category) =>{
    console.log(Category)
    nextStep();
  }
    return(
        <Container className="animate__animated animate__fadeInUp" >
            <Row className="py-3 align-items-center">
              <Col sm="9">
                <h4 className="display-4 mb-0">Select a Category</h4>
              </Col>
            </Row>
            <Row>
                <Col lg="2">
                <div style={{cursor: "pointer" }}onClick={()=>(handleCategoryClick("tv"))} >
                  <Card className="card-lift--hover shadow border-0">
                     <CardBody className="py-4">
                      <div className="text-center mb-2 mt-2">
                           <i className="fa-solid fa-tv fa-2xl mb-4"></i>  <h3 className="heading mb-0">TV</h3>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} onClick={()=>(handleCategoryClick("music"))} >
                <Card className="card-lift--hover shadow border-0">
                     <CardBody className="py-4">
                      <div className="text-center mb-2 mt-2">
                      <i className="fa-solid fa-music fa-2xl mb-4"></i>      <h3 className="heading mb-0">MUSIC</h3>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} onClick={()=>(handleCategoryClick("games"))} >
                <Card className="card-lift--hover shadow border-0">
                     <CardBody className="py-4">
                      <div className="text-center mb-2 mt-2">
                      <i className="fa-solid fa-gamepad fa-2xl  mb-4"></i>       <h3 className="heading mb-0">GAMES</h3>
                      </div>
                    </CardBody>
                    </Card>
                    </div>
                    
                </Col>
                <Col lg="2">
                <div style={{cursor: "pointer" }} onClick={()=>(handleCategoryClick("other"))}>
                  <Card className="card-lift--hover shadow border-0">
                     <CardBody className="py-4">
                      <div className="text-center mb-2 mt-2">
                      <i className="fa-solid fa-circle  fa-2xl mb-4"></i>     <h3 className="heading mb-0">OTHER</h3>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                    
                </Col>
            </Row>
            {/* <Row className="mt-3">
                <Col md="4">
                    <div className="text-left">
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
            </Row> */}
        </Container>
    );
}