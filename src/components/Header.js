import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';
import favicon32x32 from '../images/favicon32x32.png';
import SearchBox from './SearchBox';


function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const engineeringHandler = () => {
      navigate(`/?keyword=engineering&page=1`)
    }

    const cvHandler = () => {
      navigate(`/?keyword=computervision&page=1`)
    }

    const electronicsHandler = () => {
      navigate(`/?keyword=electronics&page=1`)
    }

    const llmHandler = () => {
      navigate(`/?keyword=llm&page=1`)
    }

    const climateHandler = () => {
      navigate(`/?keyword=climate&page=1`)
    }

  return (
    <Navbar expand="lg" className="" style={{'color': '#1A58B4', 'backgroundColor': '#FFFFFF', 'borderBottom': '1px solid #D0D5DD'}}>
      <Container>
        {/* <LinkContainer to='/'> */}
            <Navbar.Brand href="/" style={{'color': '#1A58B4', 'fontSize':'1.5rem'}}>
                <Image src={favicon32x32} className="me-2"/>Summare
            </Navbar.Brand>
        {/* </LinkContainer> */}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Explore by topic" id="basic-nav-dropdown" style={{'color': '#272937', 'fontSize':'1.2rem'}}>
              <NavDropdown.Item href="#" onClick={engineeringHandler}>Engineering</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={cvHandler}>
              Computer Vision
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={electronicsHandler}>Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={llmHandler}>LLMs</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={climateHandler}>Climate</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            
          </Nav>
          
          <Nav className='me-auto pt-2'>
          <div>
            <SearchBox/>
          </div>
          </Nav>
          {userInfo? 
          <Nav className="ml-auto">
            
            <NavDropdown title={userInfo.user} id="basic-nav-dropdown" style={{'color': '#272937'}}>
                <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={logoutHandler}>
                Logout
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/construction" style={{'color': '#1A58B4'}}>
                <Button variant='primary' className='blue-button' style={{'fontSize':'1.2rem'}}>Subscribe</Button>
            </Nav.Link>
          
          </Nav>:
          <Nav className="ml-auto">
            <LinkContainer to='/login'>
                <Nav.Link href="#" style={{'color': '#272937', 'fontSize':'1.2rem'}}>Log in</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/register'>
                <Nav.Link href="#" style={{'color': '#272937'}}>Sign up</Nav.Link>
            </LinkContainer> */}
            <Nav.Link href="/construction" style={{'color': '#1A58B4'}}>
                <Button variant='primary' className='blue-button'>Subscribe</Button>
            </Nav.Link>
          </Nav>
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  )
}

export default Header
