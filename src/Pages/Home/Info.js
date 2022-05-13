import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../assets/icons/clock.svg';
import marker from './../../assets/icons/marker.svg';
import phone from './../../assets/icons/phone.svg';

const Info = () => {
    const gradient = " bg-gradient-to-r from-secondary to-primary ";
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard
                img={clock}
                bgChange={gradient}
                cardTitle="Opening Hours"
                cardText="Long Opening hours for serving working patients also"
            />
            <InfoCard
                img={marker}
                bgChange="bg-accent"
                cardTitle="Visit Our Location"
                cardText="Yokohama, Asahi ku, Japan;"
            />
            <InfoCard
                img={phone}
                bgChange={gradient}
                cardTitle="Call us Now"
                cardText="+0092880379"
            />

        </div>);
};

export default Info;