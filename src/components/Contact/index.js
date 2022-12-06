import Loader from 'react-loaders'
import './index.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_og68bwu', 'template_zbjom5y', form.current, 'zEjs_2nVXooZbD7aG')
        .then((result) => {
            console.log(result.text);
            alert("Email Has Been Sent!")
        }, (error) => {
            console.log(error.text);
        });
    };

    
    
    return (<>
   
   
     <form  className="contact-form"ref={form} onSubmit={sendEmail}>
     <h2 className="h2">Send Me An Email <br />
     <FontAwesomeIcon icon={faEnvelope} color="white"/></h2>
     
      <input className="user_name" placeholder="Enter Your Name" type="text" name="user_name" />
      <br />
      <input className="user_email"placeholder="Enter Your Email" type="email" name="user_email" />
      <br />
      <textarea  className="message" placeholder="Send Message" name="message" />
      <input type="submit" value="Send" />
    </form>
    <div className="contact-format">
        <div className="contact-me">
        
            <div className="phone"><ion-icon name="call"></ion-icon>&nbsp;+3854841260</div>
            <br/>
            <div className="email"><ion-icon name="mail"></ion-icon>&nbsp;Jonathonvanausdal257@gmail.com</div>
            <br/>
            <div className="location"><ion-icon name="location"></ion-icon>&nbsp;American Fork, Utah</div>
        </div>
    </div>
    
       <Loader type="line-spin-fade-loader" />
        </>
    )
}

export default Contact