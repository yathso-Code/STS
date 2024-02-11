import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPaperPlane, faHeart,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Footer.css'
import instagram from '../img/Footer-img/instagram.png';
import facebook from '../img/Footer-img/facebook.png';
import twitter from '../img/Footer-img/twitter.png';
import whatsapp from '../img/Footer-img/whatsapp.png';

const Footer = () => {
    const phoneNumber = "+91-9651363333";
    // clcik call function ----------------------
    const handleClickToCall = () => {
        window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
      };

    return (
        <>
            <footer>
                <div className="About">
                    <h2>Address</h2>
                    <p> <FontAwesomeIcon icon={faLocationDot} /> Patrika Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001</p>
                    <div className="Social-media">
                        <a href="https://twitter.com/"><img src={twitter} alt='twitter' /></a>
                        <a href="https://www.facebook.com"><img src={facebook} alt='facebook' /></a>
                        <a href="https://www.instagram.com"><img src={instagram} alt='instagram' /></a>
                        <a href="https://www.whatsapp.com"><img src={whatsapp} alt='whatsapp' /></a>
                    </div>
                </div>
                <div className="Contact">
                    <h2>Have a Question ?</h2>
                    <div onClick={handleClickToCall}><span><FontAwesomeIcon icon={faPhone} /></span>{phoneNumber}</div>
                    <div><span><FontAwesomeIcon icon={faEnvelope} /></span>abc123@gmail.com</div>
                    <div className="input-area">
                        <input type="text" placeholder="Your Mobile Number" />
                            <textarea placeholder="Write Your Message"></textarea>
                    </div>
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </footer>
            

            <footer className="Copyright">
                <span>
                    Copyright &copy;2024 All rights reserved.
                </span>
                <span>This website is made with <FontAwesomeIcon icon={faHeart} /> by STS Team. </span>
            </footer>
        </>
    )
}

export default Footer
