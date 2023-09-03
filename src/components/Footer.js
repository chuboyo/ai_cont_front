import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form, InputGroup, Row , Image} from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import '../App.css';
import favicon32x32 from '../images/favicon32x32.png';

export default function App() {
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
            
           <Button variant='primary' className='blue-button p-2'>Subscribe</Button>
    
              
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
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Topics</h6>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Engineering
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Space exploration
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Electronics
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Resources</h6>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Donate
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Newsletter
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Events
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Help center
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Tutorials
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Support
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{'color': '#98A2B3', 'fontSize':'1.2rem', 'fontWeight':'600', 'lineHeight':'1.25rem'}}>Socials</h6>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Twitter
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='footer-item' style={{'fontSize':'1.0rem'}}>
                  Facebook
                </a>
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
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </a>
            </div>
        </section>
      
    </MDBFooter>
  );
}