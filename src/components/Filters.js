import { Row, Col } from "reactstrap";

const Filters = () =>{
    return(
    <Row>
        <Col className="form-check-inline " lg="12" md="12">
          {/* Checkboxes */}
          <div className="mr-3">
            <small className="text-uppercase font-weight-bold">
              Filters
            </small>
          </div>
          <div className="custom-control custom-checkbox mr-3">
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              <span>Unchecked</span>
            </label>
          </div>
          <div className="custom-control custom-checkbox mr-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customCheck2"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck2">
              <span>Checked</span>
            </label>
          </div>
         
         
        </Col>
    </Row>
    )
}
export default Filters