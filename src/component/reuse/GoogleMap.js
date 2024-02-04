import React from 'react'
import './GoogleMap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const GoogleMap = () => {
    return (
        <>
            <address>
                <div className="contacts">

                    <div className="box">
                        <div className='icon'><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className='info'>ADDRESS:</div>
                        <p>Patrika Churaha, Civil Lines,<br />
                            Prayagraj, Uttar Pradesh, 211001</p>
                    </div>
                    <div className="box">
                        <div className='icon'><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className='info'>EMAIL:</div>
                        <p>contact@stseducationindia.com <br />
                            info@stseducationindia.com</p>
                    </div>
                    <div className="box">
                        <div className='icon'><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className='info'>CALL US:</div>
                        <p>+91 6202254450 <br />
                            +91 2244668800</p>
                    </div>

                </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.0363402838817!2d81.84014279406247!3d25.455164796478172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acac121c62a0b%3A0x36ec42c12272aa21!2sSOFTWARE%20AND%20WEBSITE%20DEVELOPMENT!5e0!3m2!1sen!2sin!4v1707042678605!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </address>
        </>
    )
}

export default GoogleMap
