import React from 'react';
import ButtonPrimary from '../Shared/ButtonPrimary/ButtonPrimary';
import chair from './../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 md:px-10 sm:px-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Welcome to TruGlo Modern Dentistry, we strive to bring you quality of care that is like no other dental experience you have had. Our cosmetic dentist, and staff are comforting, genuine, and completely devoted to your well being and comfort.</p>
                    <ButtonPrimary text="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default Banner;