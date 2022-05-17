import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center ">
                <h2 className="card-title text-center text-secondary">{name}</h2>
                <p className='py-2'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another Date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center py-2">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white  uppercase font-bold bg-gradient-to-r from-secondary to-primary "
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;