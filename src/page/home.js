import React,{useState} from "react";
import "./home.css"
import logo from "../assets/images/main-logo.png"
import { reduceRight } from "async";
import mall from "../assets/icons/mall.png"
import phonelogo from "../assets/icons/phonelogo.png"
import paintiing from "../assets/icons/painting.png"
import skyscrapper from "../assets/icons/skyscrapper.png"
import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpg"
import appstore from "../assets/images/appstore.jpg"
import playstore from "../assets/images/playstore.jpg"
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import footerlogo from "../assets/images/main-logo-footer.png"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    src:slider1,
    altText: 'Slide 1',
    caption: <div className="caption">STORE VISIT LOG 1</div>
  },
  {
    src:slider2,
    altText: 'Slide 2',
    caption:  <div className="caption">STORE VISIT LOG 2</div>
  },
  {
    src:slider3,
    altText: 'Slide 3',
    caption: <div className="caption">STORE VISIT LOG 3</div>
  }
]

export const Home = (props) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [contact,setContact]=useState(false)
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <div className="carouseDiv" style={{backgroundImage:`url(${item.src})`}}></div>
            <CarouselCaption className="captionContainer" captionText={item.caption} />
          </CarouselItem>
        );
      });
    
  return (
    <div style={{maxWidth:"100vw"}}>
      <div className="bckChange1">
        <img src={logo}  className="logo"/>
        <div className="detailsbuttonDiv">
            <button className="detailsbutton"  onClick={()=>{
       var about=document.querySelector("#about")
       about.scrollIntoView({behavior:"smooth"})
      }}>About Us</button>
            <button className="detailsbutton" onClick={()=>{
              setContact(true)
              setTimeout(()=>{
                var contact=document.querySelector(".contact")
                contact.style.marginTop="20px"
              },30)
            }}>Contact</button>
        </div>
        <div className="textDiv">
            <div className="text">
            <div style={{color:"white"}}>
              <b>
            Hassle Free
            </b>
            </div>
            <div className="subText">Shopping Experience</div>
            </div>
        </div>
        </div>
        <div className="bckChange2">
        <div className="aboutUs">
            <div id="about" className="AboutHeader">
            <div>
            <strong style={{textAlign:"center"}}>About Us</strong>
            <div style={{display:"flex",padding:"0px 3px 0px 3px"}}>
            <div style={{borderRadius:"10px",marginRight:"3px",width:"100%",height:"4px",backgroundColor:"white"}}></div>
            <div style={{borderRadius:"10px",marginRight:"2px",width:"50%",height:"4px",backgroundColor:"white"}}></div>
            <div style={{borderRadius:"10px",marginRight:"1px",width:"15%",height:"4px",backgroundColor:"white"}}></div>
            </div>
            </div>
            </div>
            <p>
            Shopping should be fun-filled when you are visiting a mall or any business store. But, the majority of people nowadays believe that conventional shopping malls are losing their frame due to long waiting in the queues for verifying their identity and related details (before entering into the store). Most people fear getting stuck at the entrance point, wasting precious hours of their time. So, it’s time you embrace mobile technology and make a self-check-in with EZWalkin.
EzWalkin is a customer engagement tool for huge shopping malls, business centers, and related corporate businesses. The major aim of this technology is to let the shoppers navigate any nearby malls without any hassles and guarantees to get the most of their visit to the shopping malls or nearby partner stores. It allows shoppers to get in touch with the shopping centers through a single click. Shoppers just need to log in with the app and enter their info like a passport or Emirates ID and there you are done. Besides, the application focuses on the needs of both retailers and shoppers and caters to them in the best possible manner. Overall, EZWalkin is easy to use, and affordable platform where one can manage everything in one place – that too in a single stretch.
            </p>
        </div>
        <div style={{marginTop:"100px",display:"flex"}}>
        <div className="tempbck"></div>
        <div className="aboutUs2">
            <p>Shopping should be fun-filled when you are visiting a mall or any business store. But, the majority of people nowadays believe that conventional shopping malls are losing their frame due to long waiting in the queues for verifying their identity and related details (before entering into the store). Most people fear getting stuck at the entrance point, wasting precious hours of their time. So, it’s time you embrace mobile technology and make a self-check-in with EZWalkin.
<br/>
<br/>
EzWalkin is a customer engagement tool for huge shopping malls, business centers, and related corporate businesses. The major aim of this technology is to let the shoppers navigate any nearby malls without any hassles and guarantees to get the most of their visit to the shopping malls or nearby partner stores. It allows shoppers to get in touch with the shopping centers through a single click. Shoppers just need to log in with the app and enter their info like a passport or Emirates ID and there you are done. Besides, the application focuses on the needs of both retailers and shoppers and caters to them in the best possible manner. Overall, EZWalkin is easy to use, and affordable platform where one can manage everything in one place – that too in a single stretch.
<br/>
<br/>
Partners and stores will have their visitors details and can push notifications of events and offers to their valued customers.</p>
        </div>
        </div>
        <div className="AdvantageContainer">
        <div className="AdvantageHeader">
      <div>
          <strong>Advantages</strong>
            <div style={{display:"flex",padding:"0px 3px 0px 3px"}}>
            <div style={{borderRadius:"10px",marginRight:"3px",width:"100%",height:"4px",backgroundColor:"white"}}></div>
            <div style={{borderRadius:"10px",marginRight:"2px",width:"50%",height:"4px",backgroundColor:"white"}}></div>
            <div style={{borderRadius:"10px",marginRight:"1px",width:"15%",height:"4px",backgroundColor:"white"}}></div>
            </div>
          </div>
          </div>
          <p>EZwalkin as name implies makes an easy walkin to shopping malls,
          Business centres and events without any hassles.</p>
          <div className="advantages">
          <div className="advantage">
              <img src={mall} className="Advlogo"/>
              <br/>
              <b>Shopping Malls</b>
              <ul>
                <li> Install this app and log in to your entry for easy navigation into the mall.</li>
                <li> Equally provides individual mall logs and store logs.</li>
                <li> Shoppers can track the deal and promotion offers of their favorite shop.</li>
                <li> Easy to use and integrates easily with your existing apps.</li>
                <li> Provides intelligent parking solution and thus is scalable to the vehicle also.</li>
                <li> Covers access to all partner malls across the globe.</li>
              
              </ul>
          </div>
          <div className="advantage">
          <img src={skyscrapper} className="Advlogo"/>
          <br/>
          <b>Business Centers</b>
          <ul>
            <li> With EZWalkin customers can enjoy the ease of no particular security checks.</li>
            <li> All they need to scan the QR code at the entrance.</li>
            <li> They get an access card if any.</li>
            <li> No hassles associated with vehicle entry or parking.
ble to vehicle entry, parking integration with current system.</li>
          </ul>
          </div>
          <div className="advantage">
          <img src={paintiing} className="Advlogo"/>
          <br/>
          <b>Exhibitons & Festivals</b>
          <ul>
            <li> One of the biggest pains of attending events is queueing.</li>
            <li> Helps never miss any deals by adding them to the calendar.</li>
            <li> Send push notifications about the exhibitions and festivals.</li>
            <li> This in turn helps easy access to all global partnering events.</li>
            <li> Keep a directory of all guest information like verified ID, mobile number, etc.</li>
          </ul>
          </div>
          </div>
          </div>
          
      </div>
      <div className="imageSliderDiv">
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  
  <div className="footer">
    <div className="infoContainer">
      <div className="info">
        <div className="footerButtons">
          <div>
      <button className="footerButton" onClick={()=>{
       var about=document.querySelector("#about")
       about.scrollIntoView({behavior:"smooth"})
      }}>ABOUT US</button>
      <button className="footerButton"  onClick={()=>{
              setContact(true)
              setTimeout(()=>{
                var contact=document.querySelector(".contact")
                contact.style.marginTop="20px"
              },30)
            }}>CONTACT</button>
      </div>
      </div>
      <div className="eachinfo">
        <div>
          <text>
           xyz@mail.com
           </text>
        </div>
        <div >
          <text>
            abc@mail.com
            </text>
        </div>
      </div>
      <div className="eachinfo">
        <div>
          <text>
        999495903 
        </text>
        </div>
        <div>
          <text>
        9994959031
        </text>
        </div>
      </div>
    </div>
    </div>
    <div className="store">
     <img src={appstore} className="appStore"/>
     <img src={playstore} className="playStore"/>
    </div>
    <div className="termsContainer">
      <div className="terms">Terms and Condition &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Privacy</div>
      <div className="terms">Powered By Leora Solutions LLP</div>
    </div>
    <div className="socialContainer">
    <div className="social">
      <h1>f</h1>
    </div>
    <div className="social">
      <h1>
      in</h1>
    </div>
    </div>
  </div>
  {contact
  &&
  <div className='contactContainer'>
      <div className="contact">
      <div className="exitDiv" onClick={()=>{
        setTimeout(()=>{
          setContact(false)
        },900)
        var contact=document.querySelector(".contact")
        contact.style.marginTop="-550px"
        
      }}>
        <div className="exit">
        <div className="ediv_1"></div>
        <div className="ediv_2"></div>
        </div>
        </div>
        <b>We are happy to serve you !</b>
        <form>
          <div className="inputContainer">
        <div  className="inputDiv">
        <text style={{fontWeight:"bold",fontSize:"20px"}}>@</text>
        <input  placeholder="Your Name"/>
        </div>
        <div className="inputDiv">
        <i class="fa fa-phone fa-lg"></i> 
        <input placeholder="mobile number" />
        </div>
        <div className="inputDiv">
        <i class="fa fa-envelope icon fa-lg"> 
              </i> 
              <input placeholder="email address" />
        </div>
        <div className="inputDiv">
        <i class="fa fa-comment fa-lg"> 
              </i> 
              <input placeholder="Your Message" />
        </div>
        <button className="SubmitButton">Send</button>
        </div>
        </form>
      </div>
      
  </div>
   }
   </div>
  )
};
