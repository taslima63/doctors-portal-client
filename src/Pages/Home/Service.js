import React from 'react';

const Service = ({ service }) => {
    const { img, cardTitle, cardText } = service;
    return (
        <div>
            <div className="card lg-max:w-lg h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardText}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;