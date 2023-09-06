import React from 'react';
import {Container, Row, Col, Image, Badge, Card} from 'react-bootstrap';
import aiimg3 from '../images/aiimg3.jpeg';
import { Link } from 'react-router-dom';
import '../App.css';

function ArticleOne({article}) {
  return (
   <Container className='pt-4'>
        <Row>
            <Link to={`/articles/${article.id}/`}>
                <Image src={article.image_url? article.image_url: aiimg3} fluid style={{'maxHeight':'33vh','minHeight': '33vh', 'width':'100%'}}/>
            </Link>
                
        </Row>
    
        <Row className='text-start pt-1' style={{'fontSize':'1.3rem', 'fontWeight': '600', 'color':'#101828', 'lineHeight':'1.3rem'}}>
            <Link to={`/articles/${article.id}/`} className='link-item'>
                {article.title}
            </Link>
            
        </Row>
        <Row className='text-start' style={{'fontSize':'0.875rem', 'fontWeight': '600', 'color':'#98A2B3', 'lineHeight':'1.25rem'}}>
            <Container>{article.date} </Container>
             
            
        </Row>
        <Row className='text-start truncate2 pt-2' style={{'fontSize':'1.0rem', 'fontWeight': '400', 'color':'#667085', 'lineHeight':'1.5rem'}}>
            <Container>{article.paragraph_one}</Container>
                    
        </Row>
        <Row className='text-start'>
            <Col xs={2}>
                <Badge bg="info" text="dark" className='pill-button'>
                Artificial Intelligence
            </Badge>
            </Col>
        </Row>
   </Container>
  )
}

export default ArticleOne
