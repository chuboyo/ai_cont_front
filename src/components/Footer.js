import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form, InputGroup, Row , Image} from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import favicon32x32 from '../images/favicon32x32.png';

export default function App() {
  const url =  window.location

  const navigate = useNavigate()

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
    <MDBFooter bgColor='' className='text-center text-lg-start text-muted pt-2'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 newsletter'>
        <div className='me-4 d-none d-lg-block p-2'>
            <div className='row mx-4'>
                <h3 style={{'color': '#101828', 'fontSize':'1.25rem', 'fontWeight':'500', 'lineHeight':'1.875rem'}}>Join our newsletter</h3>
            </div>
            <div className='row mx-4'>
                <p style={{'color': '#667085', 'fontSize':'1.0rem', 'fontWeight':'400', 'lineHeight':'1.5rem'}}>We'll send you a nice letter once per week. No spam.</p>
            </div>
          
        </div>

        <div className='p-3'>
            
           <Button variant='primary' className='blue-button p-2' href='/construction'>Subscribe</Button>
    
              
        </div>
        
      </section>

      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 className='fw-bold mb-4' style={{'color': '#1A58B4'}}>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                <Image src={favicon32x32} className="me-2"/>
                <a href='/' className='link-item2'>Summare</a>
                
              </h4>
              <p style={{'color': '#98A2B3', 'fontSize': '1.0rem', 'fontWeight': '400', 'lineHeight': '1.5rem'}}>
                Decode, digest and decide. AI powered summaries of the latest discoveries in technology.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Topics</h6>
              <p>
                <a href='#!' onClick={engineeringHandler} className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Engineering
                </a>
              </p>
              <p>
                <a href='#!' onClick={cvHandler} className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Computer Vision
                </a>
              </p>
              <p>
                <a href='#!' onClick={electronicsHandler} className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Electronics
                </a>
              </p>
              <p>
                <a href='#!' onClick={llmHandler} className='footer-item' style={{'fontSize':'1.0rem'}}>
                  LLMs
                </a>
              </p>
              <p>
                <a href='#!' onClick={climateHandler} className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Climate
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Resources</h6>
              <p>
                <a href='/construction' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Donate
                </a>
              </p>
              <p>
                <a href='/construction' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Newsletter
                </a>
              </p>
              <p>
                <a href='/construction' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Events
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Socials</h6>
              <p>
                <TwitterShareButton
                          url={url}
                          title='summare.ai'
                          hashtag='#AI'
                      >
                  
                    <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                      Twitter
                    </a>
                
                </TwitterShareButton>
              </p>
              <p>
                <LinkedinShareButton
                          url={url}
                          title='summare.ai'
                      >
                  
                    <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                      Linkedin
                    </a>
                  
                </LinkedinShareButton>
              </p>
              <p>
                <FacebookShareButton
                          url={url}
                          quote='summare.ai'
                          hashtag="#AI"
                      >
                  
                    <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                      Facebook
                    </a>
                  
                </FacebookShareButton>
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'0.875rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Legal</h6>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Terms
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Cookies
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Licenses
                </a>
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer' style={{'borderTop': '1px solid #D0D5DD'}}>
            <div className='text-start' style={{'color': '#98A2B3', 'fontSize': '1.0rem', 'fontWeight': '400', 'lineHeight': '1.5rem'}}>
            © 2023 Summare. All rights reserved.
            
            </div>

            <div style={{'color': '#98A2B3'}}>
                <TwitterShareButton
                        url={url}
                        title='summare.ai'
                        hashtag='#AI'
                    >
                        <a href='#' className='me-4 text-reset' >
                            <MDBIcon fab icon="twitter" />
                        </a>
                </TwitterShareButton>
                    
                <LinkedinShareButton
                        url={url}
                        title='summare.ai'
                    >
                        <a href='#' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                </LinkedinShareButton>
                <FacebookShareButton
                        url={url}
                        quote='summare.ai'
                        hashtag="#AI"
                    >
                        <a href='#' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                </FacebookShareButton>
            </div>
        </section>
      
    </MDBFooter>
  );
}