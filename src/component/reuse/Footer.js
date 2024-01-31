import React from 'react'
import './Footer.css'
import instagram from '../img/Footer img/instagram.png';
import facebook from '../img/Footer img/facebook.png';
import twitter from '../img/Footer img/twitter.png';
import whatsapp from '../img/Footer img/whatsapp.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="About">
                    <h2>About Us</h2>
                    <p>STS Education is one of the education paltfom in all over india its provide online learning with Earning
                        (jobs).</p>
                    <div className="Social-media">
                        <a href="https://twitter.com/"><img src={twitter} alt='twitter' /></a>
                        <a href="https://www.facebook.com"><img src={facebook} alt='facebook' /></a>
                        <a href="https://www.instagram.com"><img src={instagram} alt='instagram' /></a>
                        <a href="https://www.whatsapp.com"><img src={whatsapp} alt='whatsapp' /></a>
                    </div>
                </div>
                <div className="Contact">
                    <h2>Have a Question ?</h2>
                    <div><span><i className="fa-solid fa-phone"></i></span>+91-2244668822</div>
                    <div><span><i className="fa-solid fa-envelope"></i></span>abc123@gmail.com</div>
                    <div className="input-area">
                        <input type="text" placeholder="Your Mobile Number" />
                            <textarea placeholder="Write Your Message"></textarea>
                    </div>
                    <button><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </footer>
            

            <footer className="Copyright">
                <span>
                    Copyright &copy;2024 All rights reserved.
                </span>
                <span>This website is made with <i className="fa-solid fa-heart"></i> by STS Team. </span>
            </footer>
        </>
    )
}

export default Footer
