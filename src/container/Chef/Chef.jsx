import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef"/>
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Chef's Word"/>
            <h1 className="headtext__cormorant">What We Believe In</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote"/>
                    <p className="p__opensans">At Gericht, we believe in the power of food to bring people together.</p>
                </div>
                <p className="p__opensans">It’s more than just a meal—it’s about connection, shared moments, and
                    unforgettable experiences. Every plate reflects our passion for culinary artistry, blending
                    tradition with creativity to inspire and delight..</p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign"/>
            </div>
        </div>

    </div>
);

export default Chef;
