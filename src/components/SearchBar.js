import {
    FormGroup,
    Input,
    InputGroupText,
    InputGroup,
    Row,
    Col
  } from "reactstrap";

const SearchBar = () =>{
    return(
        <> 
        <Row className="justify-content-center">
            <Col className="mt-5"lg="8" sm="8">
            <FormGroup >
                <InputGroup className="mb-4">
                    <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                <Input
                    placeholder="Search"
                    type="text"
                    onFocus={e => this.setState({ searchFocused: true })}
                    onBlur={e => this.setState({ searchFocused: false })}
                />
                </InputGroup>
            </FormGroup>
            </Col>
        </Row>
        </>
    )
}
export default SearchBar