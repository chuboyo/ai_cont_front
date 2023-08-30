import React from 'react';
import {Container, Row, Col, Image, Badge} from 'react-bootstrap';
import aiimg2 from '../images/aiimg2.jpeg';
import { Link } from 'react-router-dom';
import '../App.css';

function ArticleTwo({article}) {
  return (
   <Container className='pt-4'>
        <Row>
            
            <Col lg={6}>
                <Link to={`/articles/${article.id}/`}>
                    <Image src={article.image_url? article.image_url: aiimg2} fluid className='image'/>
                </Link>
            </Col>
            <Col lg={6}>
                <Container>
                    <Row className='text-start' style={{'fontSize':'0.875rem', 'fontWeight': '600', 'color':'#98A2B3', 'lineHeight':'1.25rem'}}>
                        {article.source} &bull; {article.date}
                        
                    </Row>
                </Container>
                
    
                <Row className='text-start' style={{'fontSize':'1.2rem', 'fontWeight': '600', 'color':'#101828', 'lineHeight':'2.0rem'}}>
                    <Link to={`/articles/${article.id}/`} className='link-item'>
                        {article.title}
                    </Link> 
                </Row>
                
                <Container>
                    <Row className='text-start truncate' style={{'fontSize':'1.0rem', 'fontWeight': '400', 'color':'#667085', 'lineHeight':'1.5rem'}}>
                        {article.paragraph_one}
                    </Row>
                </Container>
                
                <Row className='text-start'>
                    <Col xs={2}>
                        <Badge bg="info" text="dark" className='pill-button2'>
                        Artificial Intelligence
                    </Badge>
                    </Col>
                </Row>
            </Col>
            
        </Row>
        
   </Container>
  )
}

export default ArticleTwo;