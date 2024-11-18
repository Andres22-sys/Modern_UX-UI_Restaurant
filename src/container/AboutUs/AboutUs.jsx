import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="g letter"/>
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">At Gericht, we are dedicated to delivering a remarkable dining experience
                    that blends tradition with modern sophistication. Our passion lies in crafting exquisite dishes
                    and curating a warm, welcoming atmosphere for every guest. From innovative culinary techniques
                    to exceptional service, every detail reflects our commitment to excellence.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">Founded with a vision to redefine dining, Gericht has grown from humble
                    beginnings into a symbol of culinary excellence. Rooted in tradition and inspired by innovation,
                    our journey reflects a passion for exceptional food, unforgettable moments, and a commitment to
                    creating memories that last a lifetime.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>
        </div>
    </div>
);

export default AboutUs;
