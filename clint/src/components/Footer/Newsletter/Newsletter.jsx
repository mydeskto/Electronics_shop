import react from 'react'
import {
    FaFacebookF ,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa'

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className='newsletter-section'>
        <div className="newsletter-content">
    <span className='small-text'>
                NewsLetter
            </span>
            <span className="big-text">
                Sign Up for latest updates and offers.
            </span>
            <div className="form">
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
            </div>

        </div>
        </div>;
};

export default Newsletter;
