import '../App.css';
import { Container, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useLocation , useNavigate, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import TrimHeader from '../components/TrimHeader';


import React from 'react'

function UserDetailsScreen() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [confirmnewpassword, setConfirmNewPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    // const userDetails = useSelector(state => state.userDetails)
    // const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { loading, error, success, success_message } = userUpdateProfile

    
    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    }, [dispatch,userInfo, success_message])

    const submitHandler = (e) => {
        e.preventDefault()

        if (newpassword != confirmnewpassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'old_password': oldpassword,
                'new_password': newpassword,
            }))
            
        }
        

    }
  return (
    <div className='main'>
        <TrimHeader/>
        <Container>
                {/* <Row style={{'minHeight':'10vh'}}></Row> */}
                <Row className='justify-content-start pt-4' style={{'color': '#03080A', 'fontSize':'2.0rem', 'fontWeight':'600','lineHeight':'2.0rem'}}>
                    <Col md={4}> </Col>
                    <Col md={4} className='text-start'> 
                    Profile Settings
                    </Col>
                    <Col md={4}> </Col>
                </Row>
                
                <Row className='justify-content-center' style={{'fontSize':'1.0rem', 'fontWeight':'400','lineHeight':'1.5rem'}}>
                    <Col md={4}> </Col>
                    <Col md={4}> 
                        {message && <Message variant='primary'>{message}</Message>}
                        {error && <Message variant='primary'>Old password is incorrect</Message>}
                        {loading && <Loader />}
                        {success_message && <Message variant='primary'>{success_message}</Message>}
                    </Col>
                    <Col md={4}> </Col>
                </Row>
                <Row className=''>
                    <Col md={4}> </Col>
                    <Col md={4}> 
                        <Form className='pt-2' onSubmit={submitHandler}>
                            <Container className='pt-2'>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Name</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={userInfo? userInfo.user:''}
                                placeholder=''
                                disabled
                                />
                            </InputGroup>
                            <Container>
                                <Row style={{ 'borderBottom': '1px solid #D0D5DD'}}></Row>
                            </Container>
                            
                            <Container className='pt-2'>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Email</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={userInfo? userInfo.email:''}
                                placeholder="Enter your email"
                                disabled
                                />
                            </InputGroup>
                            <Container>
                                <Row style={{ 'borderBottom': '1px solid #D0D5DD'}}></Row>
                            </Container>
                            <Container>
                                <Row className='justify-content-start pt-2' style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'600','lineHeight':'1.25rem'}}>
                                    Change Password
                                </Row>
                            </Container>
                            

                            <Container className='pt-2'>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>Old password</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={oldpassword}
                                placeholder="Enter old password"
                                onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </InputGroup>

                            <Container>
                                <Row style={{'color': '#344054', 'fontSize':'1.0rem', 'fontWeight':'500','lineHeight':'1.25rem'}}>New password</Row>
                            </Container>
                            <InputGroup className="mb-3">
                                
                                <Form.Control
                                type='text'
                                value={newpassword}
                                placeholder="Enter new password"
                                onChange={(e) => setNewPassword(e.target.value)}
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
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />
                            </InputGroup>
                            
                            <div className="d-grid gap-2 pt-3">
                                <Button type='submit' variant='primary' className='blue-button p-2'>Update</Button>
                            </div>
                            
                        </Form>
                        
                    </Col>
                    <Col md={4}> </Col>
                </Row>
                
            </Container>
    </div>
  )
}

export default UserDetailsScreen
