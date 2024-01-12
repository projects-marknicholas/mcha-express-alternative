import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// components
import CountingAnimation  from '../components/counting-animation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../tools/footer'

// hero banners
import Hero1 from '../img/hero-img.png'
import Hero2 from '../img/hero-img2.png'

// Svg
import DeliveredSvg from '../img/delivered.svg'
import ClientsSvg from '../img/clients.svg'
import RidersSvg from '../img/riders.svg'
import TrackingSvg from '../img/tracking.svg'
import RatesSvg from '../img/rates.svg'
import DeliverySvg from '../img/delivery.svg'
import DeliveriesSvg from '../img/deliveries.svg'
import ContactSvg from '../img/contact.svg'

function Home() {

  useEffect(() => {
    document.title = "MCHA Express Delivery Services";
    window.scrollTo(0, 0);
  }, []);

  // for animation of hero section
  const data = [
    {
      image: Hero1,
      text: {
        h1: "Fast, Reliable Courier Solution.",
        p: 'Your rapid, dependable courier service. We deliver with speed and reliability, ensuring your packages reach their destination effortlessly.',
      },
    },
    {
      image: Hero2,
      text: {
        h1: "Your Trusted Delivery Partner",
        p: 'As your trusted delivery partner, we specialize in timely parcel dispatch. Count on our rapid and dependable courier service to deliver your packages with precision and trustworthiness.',
      },
    },
    {
      image: Hero1,
      text: {
        h1: "Punctual and Dependable",
        p: 'Experience swift shipping solutions with our punctual and dependable courier service. We take pride in delivering your packages with speed, reliability, and the utmost care for a seamless experience.',
      },
    },
    {
      image: Hero2,
      text: {
        h1: "Seamless and Reliable Deliveries",
        p: 'Choose our rapid courier services for seamless and reliable deliveries. We prioritize speed and reliability to ensure your packages reach their destination effortlessly, meeting your delivery expectations.',
      },
    },
    {
      image: Hero1,
      text: {
        h1: "Ensuring Swift Deliveries",
        p: 'Your go-to courier service for swift and efficient deliveries. We prioritize speed and reliability, ensuring your packages reach their destination with the utmost care and punctuality.',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // setting interval to 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  // change the text value together with the hero image
  const currentData = data[currentIndex];
  const uniqueKey = `${currentData.text.h3}-${currentData.text.h1}-${currentData.text.p}`;

  useEffect(() => {
    AOS.init({
      // Global settings here, if needed
    });
  }, []);

  return (
    <>
      {/* Home Section */}
      <div className='home-page'>
        <div className='hero-section'>
          {data.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`hero-img-${index}`}
              className={`hero-img ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
          <div key={uniqueKey} className='hero-description container'>
            <h1>{currentData.text.h1}</h1>
            <p>{currentData.text.p}</p>
            <Link
              to=''
            >
            Sign up now
            </Link>
          </div>
        </div>
      </div>

      {/* Numbered Data */}
      <div className='numbered-data container'>
        <div className='item' data-aos='fade-in' data-aos-duration='1000'>
          <div className='data-box'>
            <img src={DeliveredSvg} alt='parcel-delivered'/>
          </div>
          <span>
            <h1>
              <CountingAnimation targetCount={325} duration={500} />
            </h1>
            <p>Parcel Delivered</p>
          </span>
        </div>
        <div className='item' data-aos='fade-in' data-aos-duration='1400'>
          <div className='data-box'>
            <img src={ClientsSvg} alt='happy-clients'/>
          </div>
          <span>
            <h1>
              <CountingAnimation targetCount={1000} duration={500} />
            </h1>
            <p>Happy Clients</p>
          </span>
        </div>
        <div className='item' data-aos='fade-in' data-aos-duration='1800'>
          <div className='data-box'>
            <img src={RidersSvg} alt='riders'/>
          </div>
          <span>
            <h1>
              <CountingAnimation targetCount={800} duration={500} />
            </h1>
            <p>Riders</p>
          </span>
        </div>
      </div>

      {/* Our Services */}
      <div className='services container'>
        <h1>We provide that service</h1>
        <p>MCHA Express, a dynamic courier services platform, seamlessly connects you to swift and secure parcel 
          deliveries, ensuring your items reach their destination with speed and reliability.</p>

        <div className='service-grid'>
          <div className='item' data-aos='fade-up' data-aos-duration='500'>
            <div className='header-img'>
              <img src={TrackingSvg} alt='up-to-date-tracking'/>
            </div>
            <h1>UP-TO-DATE TRACKING</h1>
            <p>Lets you keep track of your parcel with no hassle using the one-click tracker.</p>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1000'>
            <div className='header-img yellow'>
              <img src={RatesSvg} alt='more-affordable-rates'/>
            </div>
            <h1>MORE AFFORDABLE RATES</h1>
            <p>We offer low-cost shipping rates with convenient modes of payment.</p>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1500'>
            <div className='header-img blue'>
              <img src={DeliverySvg} alt='fast-and-timely-delivery'/>
            </div>
            <h1>FAST AND TIMELY DELIVERY</h1>
            <p>Equipped with an effective and effecient system that delivers your parcels on time.</p>
          </div>
        </div>
      </div>

      {/* Why we are the best */}
      <div className='best container'>
        <div className='item'>
          <img src={DeliveriesSvg} alt='deliveries'/>
        </div>
        <div className='item'>
          <div className='hide'>
            <h1 data-aos='fade-down' data-aos-duration='1200'>Why we are the best & the benefits</h1>
            <p>
              MCHA Express stands out as the premier courier services platform, 
              offering unparalleled speed, security, and reliability. Experience the benefits of seamless connections, 
              timely deliveries, and unmatched customer satisfaction – making us the top choice for all your 
              shipping needs.
            </p>
            <Link>Ship with us</Link>
          </div>
        </div>
      </div>

      <div className='news container'>
        <div className='header'>
          <div className='left'>
            <h1 data-aos='fade-down'>News & Events</h1>
          </div>
          <div className='right'>
            <Link>View all</Link>
          </div>
        </div>
        <div className='grid'>
          <div className='item' data-aos='fade-up' data-aos-duration='500'>
            <Link to=''>
              <div className='news-image'>
                <img src={Hero1} alt='news-image' />
              </div>
              <div className='news-description'>
                <i>Jan 11, 2024</i>
                <p className='title'>Event title here</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                </p>
                <Link>View article</Link>
              </div>
            </Link>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1000'>
            <Link to=''>
              <div className='news-image'>
                <img src={Hero1} alt='news-image' />
              </div>
              <div className='news-description'>
                <i>Jan 11, 2024</i>
                <p className='title'>Event title here</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                </p>
                <Link>View article</Link>
              </div>
            </Link>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1500'>
            <Link to=''>
              <div className='news-image'>
                <img src={Hero1} alt='news-image' />
              </div>
              <div className='news-description'>
                <i>Jan 11, 2024</i>
                <p className='title'>Event title here</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                </p>
                <Link>View article</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Rates */}
      <div className='rates container'>
        <div className='header'>
          <h1 data-aos='fade-down'>Our Rates</h1>
          <p>Affordable rates, reliable service – MCHA Express delivers quality affordability.</p>
        </div>
        <div className='grid'>
          <div className='item' data-aos='fade-up' data-aos-duration='500'>
            <h1>PROVINCIAL RATE</h1>
            <ul>
              <li>SMALL/MEDIUM (9X14) (1KG) - P165</li>
              <li>LARGE (12X18) (3KG) - P250</li>
              <li>OWN PACK (LxWxH) (3KG) - P265</li>
            </ul>
            <i>*ADD ON 85 PESOS FOR EVERY 1 KILO</i>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1000'>
            <h1>METRO MANILA</h1>
            <ul>
              <li>MEDIUM (9X14) Unliweight - P55</li>
              <li>LARGE (12X18) 1kg-3 Kg - P70</li>
              <li>OWN PACK (LxWxH) 1st 3kg - P85</li>
            </ul>
            <i>*ADD ON 30 PESOS FOR EVERY 1 KILO</i>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1500'>
            <h1>CAVITE</h1>
            <p>
              (IMUS, TRECE MARTIRES, GEN TRIAS, BACOOR, DASMARINAS, NOVELETA, KAWIT, TANZA, ROSARIO, CAVITE CITY)
            </p>
            <ul>
              <li>MEDIUM (9X14) Unliweight - P85</li>
              <li>LARGE (12X18) 1kg-3 Kg - P95</li>
              <li>OWN PACK (LxWxH) 1st 3kg - P130</li>
            </ul>
            <i>*ADD ON 40 PESOS FOR EVERY 1 KILO</i>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='500'>
            <h1>RIZAL</h1>
            <p>
              (SAN MATEO, AMPID1-2, GUITNANG BAYAN 1-2, CAINTA, LAGUNA, TAYTAY, ANGONO, MALY, DULONG BAYAN 1-2, STA. ANA, BANABA. ANTIPOLO- CUPANG, MAYAMOT, SAN ISIDRO, DALIG, SAN ROQUE, DELA PAZ, STA CRUZ)
            </p>
            <ul>
              <li>MEDIUM (9X14) 1kg -- P70</li>
              <li>LARGE (12X18) 1kg-3 kg -- P85</li>
              <li>OWN PACK(LxWxH)1st 3kg -- P95</li>
            </ul>
            <i>*ADD ON 85 PESOS FOR EVERY 1 KILO</i>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1000'>
            <h1>RIZAL</h1>
            <p>
              (MONTALBAN, RODRIGUEZ,SILANGAN, SAN MATEO. BINANGONAN)
            </p>
            <ul>
              <li>MEDIUM (9X14) 1kg -- P105</li>
              <li>LARGE (12X18) 1kg-3 kg -- P115</li>
              <li>OWN PACK (LxWxH)1st 3kg -- P205</li>
            </ul>
            <i>*ADD ON 60 PESOS FOR EVERY 1 KILO</i>
          </div>
          <div className='item' data-aos='fade-up' data-aos-duration='1500'>
            <h1>BULACAN</h1>
            <p>
              (MEYCAUAYAN, MARILAO, BOCAUE, STA. MARIA, SAN JOSE DEL MONTE, GUIGUINTO, BALAGTAS, MALOLOS, PLARIDEL, BULAKAN BULACAN, OBANDO)
            </p>
            <ul>
              <li>MEDIUM (9X14)unliweight -- P90</li>
              <li>LARGE (12X18) 1kg-3 kg -- P100</li>
              <li>OWN PACK (LxWxH)1st 3kg -- P125</li>
            </ul>
            <i>*ADD ON 45 PESOS FOR EVERY 1 KILO</i>
          </div>
        </div>
      </div>

      {/* NewsLetter */}
      <div className='newsletter'>
        <div className='newsletter-context container'>
          <div className='left'>
            <h1 data-aos='fade-down' data-aos-duration='1000'>Join Our NewsLetter</h1>
            <p data-aos='fade-up' data-aos-duration='1000'>Join now for exclusive updates, promotions, and insights. Be the first to discover exciting news and special offers.</p>
          </div>
          <form className='right'>
            <div className='input-box'>
              <input type='email' placeholder='Enter your email'/>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact form */}
      <div className='contact container'>
        <div className='grid'>
          <div className='item' data-aos='fade-right' data-aos-duration='1000'>
            <img src={ContactSvg} alt='contact'/>
          </div>
          <form className='item' data-aos='fade-left' data-aos-duration='1000'>
            <div className='item2'>
              <label htmlFor='full-name'>
                <p>Full Name</p>
                <input type='text' name='' autoFocus/>
              </label>
              <label htmlFor='email'>
                <p>E-Mail Address</p>
                <input type='email' name=''/>
              </label>
            </div>
            <label htmlFor='subject'>
              <p>Subject</p>
              <input type='text' name=''/>
            </label>
            <label htmlFor='message'>
              <p>Message</p>
              <textarea rows={10}></textarea>
            </label>
            <div className='btn-box'>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </>
  );
}

export default Home;
