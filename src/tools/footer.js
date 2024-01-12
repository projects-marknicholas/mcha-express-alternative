import { Link } from 'react-router-dom'
import '../App.css'

// images
import Logo from '../img/logo.jpg'

// Svg
import LocationSvg from '../img/location.svg'
import CallSvg from '../img/call.svg'
import MailSvg from '../img/mail.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-info container'>
        <div className='item'>
          <div className='left'>
            <img src={LocationSvg} alt='location'/>
          </div>
          <div className='right'>
            <h2>Find us</h2>
            <p>1010 Avenue, sw 54321, chandigarh</p>
          </div>
        </div>
        <div className='item'>
          <div className='left'>
            <img src={CallSvg} alt='call'/>
          </div>
          <div className='right'>
            <h2>Call us</h2>
            <p>9876543210 0</p>
          </div>
        </div>
        <div className='item'>
          <div className='left'>
            <img src={MailSvg} alt='mail'/>
          </div>
          <div className='right'>
            <h2>Mail us</h2>
            <p>mail@info.com</p>
          </div>
        </div>
      </div>
      <div className='footer-main-info container'>
        <div className='item'>
          <img src={Logo} alt='logo'/>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='item'>
          <h2>Useful Links</h2>
          <div className='item-line'></div>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Book</Link>
            </li>
            <li>
              <Link>E-Waybill</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Track</Link>
            </li>
          </ul>
        </div>
        <div className='item'>
          <h2>Subscribe</h2>
          <div className='item-line'></div>
          <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
          <div className='input-box'>
            <input type='email' placeholder='Enter your email'/>
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='copyright-box container'>
          <div className='left'>
            <p>Copyright © 2018, All Right Reserved <span>MCHA Express</span></p>
          </div>
          <div className='right'>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Terms</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Policy</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
