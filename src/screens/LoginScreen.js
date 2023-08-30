import '../App.css';
import { Container, Col, Row, Form, Button, InputGroup, Image } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useLocation , useNavigate, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import favicon32x32 from '../images/favicon32x32.png';


function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            console.log(redirect)
            navigate(redirect)
        }
    }, [userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }


  return (
    <div className='enclose'>
        <div className='leftHand'>
            <Row style={{'minHeight':'40vh'}}></Row>
            <Container className=''>
                <div className='font-link' style={{'color':'#F0F9FF'}}>Decode, Digest and Decide</div>
                
            </Container>
            <Container className='mx-2'>
                <div className='font-link2 pt-4' style={{'color':'#FAFAFA'}}>AI-powered smart tech briefs</div>
                <div className='font-link3 pt-2' style={{'color':'#FAFAFA'}}>of the latest tech <span style={{'color':'#3CBEFF'}}>Discoveries </span></div>
                
                
            </Container>
        </div>
        <div className='rightHand'>
            <Container>
                <Container className='p-4'>
                    <Link to='/' className='link-item2'>
                        <Row className='justify-content-start' style={{'color': '#1A58B4','textDecoration':'none'}}>
                            <Image src={favicon32x32} className="" style={{'height':'2.5rem','width':'4.0rem'}}/>
                            Summare
                        </Row>
                    </Link>
                    
                </Container>
                
                <Row style={{'minHeight':'12vh'}}></Row>
                <Row className='justify-content-start' style={{'color': '#101828', 'fontSize':'2.25rem', 'fontWeight':'600','lineHeight':'2.75rem',}}>
                    <Col md={3}> </Col>
                    <Col md={6} className='text-start'> Log in</Col>
                    <Col md={3}> </Col>
                </Row>
                <Row className='justify-content-center pt-2' style={{'color': '#667085', 'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.5rem'}}>
                    <Col md={3}> </Col>
                    <Col md={6} className='text-start'>Welcome back! Please enter your details.</Col>
                    <Col md={3}> </Col>
                    
                </Row>
                <Row className='justify-content-center' style={{'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.5rem'}}>
                    <Col md={3}> </Col>
                    <Col md={6}> 
                        {error && <Message variant='primary'>Enter a valid email and password combination</Message>}
                        {loading && <Loader />}
                    </Col>
                    <Col md={3}> </Col>
                </Row>
                <Row className=''>
                    <Col md={3}> </Col>
                    <Col md={6}> 
                        <Form className='pt-2' onSubmit={submitHandler}>
                            <Container>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Email</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={email}
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputGroup>

                            <Container>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Password</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={password}
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                            <Container>
                                <Link to='/password_reset' className='link-item2'>
                                    <Row style={{'color': '#1A58B4', 'fontSize':'1.0rem', 'fontWeight':'600','lineHeight':'1.25rem'}}>Forgot password</Row>
                                </Link>
                                
                            </Container>
                            <div className="d-grid gap-2 pt-3">
                                <Button type='submit' variant='primary' className='blue-button p-2'>Sign in</Button>
                            </div>
                        </Form>
                        
                        <Row className='justify-content-center pt-2' style={{'color': '#667085', 'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.25rem'}}>OR</Row>
                        <Row className='justify-content-center' style={{'color': '#667085', 'fontSize':'1.2rem', 'fontWeight':'400','lineHeight':'1.25rem', 'display': 'inline-block'}}><span style={{'color': '#1A58B4',}}>
                        <Link to='/register' className='link-item2'>Sign up</Link></span></Row>
                        
                    </Col>
                    <Col md={3}> </Col>
                </Row>
                
            </Container>
            
        </div>
    </div>
    
  )
}

export default LoginScreen;