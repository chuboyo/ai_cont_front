import '../App.css';
import { Container, Col, Row, Form, Button, InputGroup, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation , useNavigate, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordConfirm } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import TrimHeader from '../components/TrimHeader';
import favicon32x32 from '../images/favicon32x32.png';


import React from 'react'

function PasswordResetScreen() {
    const [token, setToken] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [confirmnewpassword, setConfirmNewPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userPasswordResetConfirm = useSelector(state => state.userPasswordResetConfirm)
    const { loading, error, success, success_message } = userPasswordResetConfirm

    
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [dispatch,userInfo, success_message])

    const submitHandler = (e) => {
        e.preventDefault()

        if (newpassword != confirmnewpassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(resetPasswordConfirm({
                'password': newpassword,
                'token': token,
            }))
            
        }
        

    }
  return (
    <div className='main'>
        {/* <TrimHeader/> */}
        {!userInfo &&
        <Container>
            {/* <Row style={{'minHeight':'10vh'}}></Row> */}
            <Container className='p-4'>
                    <Link to='/' className='link-item2'>
                        <Row className='justify-content-start' style={{'color': '#1A58B4','textDecoration':'none'}}>
                            <Image src={favicon32x32} className="" style={{'height':'2.5rem','width':'4.0rem'}}/>
                            Summare
                        </Row>
                    </Link>
                    
            </Container>
            <Row style={{'minHeight':'10vh'}}></Row>
            <Container>
                <Row className='justify-content-start pt-2' style={{'color': '#101828', 'fontSize':'2.25rem', 'fontWeight':'600','lineHeight':'2.75rem'}}>
                    <Col md={4}> </Col>
                    <Col md={4} className='text-start'>
                        Create new password
                    </Col>
                    <Col md={4}> </Col>
                </Row>
            </Container>
            
            <Container>
                <Row className='justify-content-start pt-2' style={{'color': '#667085', 'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.5rem'}}>
                    <Col md={4}> </Col>
                    <Col md={4} className='text-start'>
                        Enter new password and token.
                    </Col>
                    <Col md={4}> </Col>
                </Row>
            </Container>
            
            
            <Row className='justify-content-center' style={{'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.5rem'}}>
                <Col md={4}> </Col>
                <Col md={4}> 
                    {message && <Message variant='primary'>{message}</Message>}
                    {error && <Message variant='primary'>Something went wrong. Try again.</Message>}
                    {loading && <Loader />}
                    {success_message && <Message variant='primary'>Password reset was successful.</Message>}
                </Col>
                <Col md={4}> </Col>
            </Row>
            <Row className=''>
                <Col md={4}> </Col>
                <Col md={4}> 
                    <Form className='pt-2' onSubmit={submitHandler}>
                        
                        <Container>
                            <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>New password</Row>
                        </Container>
                        <InputGroup className="mb-3">
                            
                            <Form.Control
                            type='text'
                            value={newpassword}
                            placeholder="Enter new password"
                            onChange={(e)=>setNewPassword(e.target.value)}
                            />
                        </InputGroup>

                        <Container>
                            <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Confirm new password</Row>
                        </Container>
                        <InputGroup className="mb-3">
                            
                            <Form.Control
                            type='text'
                            value={confirmnewpassword}
                            placeholder="Enter new password"
                            onChange={(e)=>setConfirmNewPassword(e.target.value)}
                            />
                        </InputGroup>

                        <Container>
                            <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Token</Row>
                        </Container>
                        <InputGroup className="mb-3">
                            
                            <Form.Control
                            type='text'
                            value={token}
                            placeholder="Enter your token"
                            onChange={(e)=>setToken(e.target.value)}
                            />
                        </InputGroup>
                        <div className="d-grid gap-2 pt-2">
                            <Button type='submit' variant='primary' className='blue-button p-2'>Proceed</Button>
                        </div>
                    </Form>
                    
                </Col>
                <Col md={4}> </Col>
            </Row>
            
        </Container>
        }
        
    </div>
  )
}

export default PasswordResetScreen;