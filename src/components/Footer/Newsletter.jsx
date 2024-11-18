import React from 'react';

import SubHeading from "../SubHeading/SubHeading";
import './Newsletter.css';

const Newsletter = () => (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="Newsletter"/>
            <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
            <p className="p__opensans">And never miss the latest Updates</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <label htmlFor="newsletter-email" className="sr-only"></label>
            <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email" /* Ensures proper autofill functionality */
            />
            <button className="custom__button">Subscribe</button>
        </div>


    </div>
);

export default Newsletter;
