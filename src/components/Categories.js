import { Button, Row, Col  } from "reactstrap";
const Categories = ()=>{
    return (
        <> 
            <section className="text-center  mb-4  mt-4">
                <Row>
                <Col lg="12">
                    <Button
                        className="btn-1 "
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        outline
                        
                    >
                        Audio Streaming
                    </Button>

                    <Button
                         className="btn-1 "
                         color="link"
                         href="#pablo"
                         onClick={e => e.preventDefault()}
                         outline
                    >
                        Books
                    </Button>

                    <Button
                          className="btn-1 "
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          outline
                    >
                        Business
                    </Button>
                    <Button
                         className="btn-1 "
                         color="link"
                         href="#pablo"
                         onClick={e => e.preventDefault()}
                         outline
                    >
                        Education
                    </Button>
                    <Button
                        className="btn-1 "
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        outline
                    >
                        Health & Fitness
                    </Button>
                    </Col>
                </Row>
                <Row>
                <Col lg="12">
                <Button
                className="text-default"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
            Games
            </Button>
            <Button
                 className="btn-1 "
                 color="link"
                 href="#pablo"
                 onClick={e => e.preventDefault()}
                 outline
            >
            News & Publications
            </Button>
            <Button
                 className="btn-1 "
                 color="link"
                 href="#pablo"
                 onClick={e => e.preventDefault()}
                 outline
            >
            Movies
            </Button>
            <Button
                  className="btn-1 "
                  color="link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  outline
            >
            Other
            </Button>
            <Button
                 className="btn-1 "
                 color="link"
                 href="#pablo"
                 onClick={e => e.preventDefault()}
                 outline
            >
                Kids & Family
            </Button>
            </Col>
                </Row>
            </section>
           
            
                
        </>
    )
}
export default Categories;