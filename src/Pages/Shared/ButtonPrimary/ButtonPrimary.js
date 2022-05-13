import React from 'react';

const ButtonPrimary = ({ text }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">{text}</button>
    );
};

export default ButtonPrimary;