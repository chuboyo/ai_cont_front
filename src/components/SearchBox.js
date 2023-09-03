import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function SearchBox() {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(location.pathname)
        }
    }

  return (
        <Form onSubmit={submitHandler}>
            
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                <Form.Control
                type='text'
                name='q'
                placeholder={'Search'}
                aria-describedby="basic-addon1"
                onChange={(e) => setKeyword(e.target.value)}
                />
            </InputGroup>
            
        </Form>
  )
}

export default SearchBox
