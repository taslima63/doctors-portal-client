import React from 'react';


const InfoCard = ({ img, bgChange, cardTitle, cardText }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgChange}`}>
            <figure className='pl-4 pt-6 lg:pt-0'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p >{cardText}</p>

            </div>
        </div>
    );
};

export default InfoCard;