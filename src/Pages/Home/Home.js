import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services></Services>
            <MakeAppointment />
            <Reviews></Reviews>
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;