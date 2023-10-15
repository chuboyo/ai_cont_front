import { Form, InputGroup } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="q"
            placeholder={"Search"}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBox;
