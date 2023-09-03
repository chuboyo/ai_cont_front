import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, } from 'react-router-dom';
import {Container, Row, Col, Image, Badge, Button, Overlay} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, EmailShareButton } from 'react-share';
import aiimg2 from '../images/aiimg2.jpeg';
import { listArticleDetails,listArticles } from '../actions/articleActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';


function ArticleScreen() {
    const dispatch = useDispatch()

    const url = window.location
    
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const articleDetails = useSelector(state => state.articleDetails)
    const articleList = useSelector(state => state.articleList)
    const { loading, error, article } = articleDetails
    const { articles} = articleList
    const {id} = useParams();
    let keyword = ''
    const sliced_articles = articles.slice(0,10)

    useEffect(() => {
        window.scrollTo({top: 0});
        dispatch(listArticleDetails(id))
        dispatch(listArticles(keyword))
        
    }, [dispatch, id])

    const copyToClipboard = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(url);
        setShow(!show)
    }

    // console.log(article.image_url)
  return (
    <div>
        <Header/>
        {loading && <Loader/>}
        <Container className='pt-4'>
            <Row className='pt-4 justify-content-center' style={{'fontSize':'1.0rem', 'fontWeight': '600', 'color':'#1A58B4', 'lineHeight':'1.5rem'}}>
                Published {article.date}
            </Row>
            <Row className='pt-2 justify-content-center' style={{'fontSize':'2.5rem', 'fontWeight': '600', 'color':'#101828', 'lineHeight':'3.75rem'}}>
                {article.title}
            </Row>
            <Row className='pt-2 justify-content-center truncate3' style={{'fontSize':'1.25rem', 'fontWeight': '400', 'color':'#667085', 'lineHeight':'1.875rem'}}>
                <p>{article.paragraph_one}</p>
            </Row>
            <Row className='pt-2'>
                <Col md={12} className='text-center'>
                    <Badge bg="info" className='text-center pill-button'>Artificial Intelligence</Badge>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Image src={article.image_url? article.image_url: aiimg2} style={{'maxHeight':'50vh'}} fluid/>
            </Row>
            <Row className='pt-4'>
                <Col lg={10} className='text-start'>
                    <Container>
                        <Row style={{'fontSize':'1.125rem', 'fontWeight': '600', 'color':'#101828', 'lineHeight':'1.75rem'}}>{article.source}</Row>
                    </Container>
                    
                    <Container>
                        <Row className='truncate3' style={{'fontSize':'1.0rem', 'fontWeight': '400', 'color':'#667085', 'lineHeight':'1.5rem'}}>{article.title}</Row>
                    </Container>
                </Col>
                <Col lg={2} className='text-center p-2' style={{'color': '#98A2B3'}}>
                    <TwitterShareButton
                        url={url}
                        title={article.title}
                        hashtag='#AI'
                    >
                        <a href='#' className='me-4 text-reset' >
                            <MDBIcon fab icon="twitter" />
                        </a>
                    </TwitterShareButton>
                    
                    <LinkedinShareButton
                        url={url}
                        title={article.title}
                        summary={article.paragraph_one}
                        source={article.source}
                    >
                        <a href='#' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                    </LinkedinShareButton>
                    
                    <FacebookShareButton
                        url={url}
                        quote={article.title}
                        hashtag="#AI"
                    >
                        <a href='#' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                    </FacebookShareButton>
                    <EmailShareButton
                        url={url}
                        subject={article.title}
                        body={article.paragraph_one}>
                        <a href='#' className='me-4 text-reset'>
                            <MDBIcon fas icon="envelope" />
                        </a>
                    </EmailShareButton>
                    
                    {/* <a href='#' className='me-4 text-reset' ref={target} onClick={copyToClipboard}>
                    <i className="fa-solid fa-link"></i>
                    </a>
                    <Overlay target={target.current} show={show} placement="right">
                        {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                        }) => (
                        <div
                            {...props}
                            style={{
                            position: 'absolute',
                            backgroundColor: '#98A2B3',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            }}
                        >
                          Copied!
                        </div>
                        )}
                    </Overlay> */}
                </Col>
            </Row>
            <Row className='pt-4 pb-4'>
                <Col className='text-start pt-2' md={8} style={{'fontSize':'1.25rem', 'fontWeight': '400', 'color':'#667085', 'lineHeight':'1.25rem'}}>
                    
                    {article.paragraph_one}
                    {/* <Container>
                        <h3>Ad here</h3>
                    </Container> */}
                    <br></br>
                    <br></br>
                    
                    {article.paragraph_two}
                    {/* <Container>
                        <h3>Ad here</h3>
                    </Container> */}
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3} className='text-start pt-2'>
                    <Container>
                        <Row style={{'fontSize':'1.0rem', 'fontWeight': '600', 'color':'#101828', 'lineHeight':'1.5rem'}}>Related Articles</Row>
                    </Container>
                    
                    {sliced_articles.map(article => (
                        <Row key={article.id}>
                            <Link  to={`/articles/${article.id}/`} className='' style={{'fontSize':'1.0rem', 'fontWeight': '400', 'color':'#1A58B4', 'lineHeight':'1.5rem'}}>
                                &bull;{article.title}
                            </Link>
                        </Row>
                        
                    ))}
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default ArticleScreen
