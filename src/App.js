import React from 'react';

import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container';
import {Navbar} from './components';
import './App.css';

const App = () => (
    <div>
        <Navbar/> {/* Navbar  completed*/}
        <Header/> {/* Header completed*/}
        <AboutUs/> {/* AboutUs completed*/}
        <SpecialMenu/> {/* SpecialMenu completed*/}
        <Chef/> {/* Chef completed*/}
        <Intro/> {/* Intro completed*/}
        <Laurels/> {/* Laurels completed*/}
        <Gallery/> {/* Gallery completed*/}
        <FindUs/>
        <Footer/>
    </div>
);

export default App;
