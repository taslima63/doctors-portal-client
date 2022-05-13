import React from 'react';
import ButtonPrimary from '../Shared/ButtonPrimary/ButtonPrimary';
import appointment from './../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div>
            <div style={{
                background: `url(${appointment})`
            }} className=" card flex justify-center items-center">
                <div className='card-body items-center text-center'>
                    <h4 className='text-primary font-bold'>Contact Us</h4>
                    <h2 className='text-white text-3xl'>Stay connected with us</h2>
                </div>

                <div className="card-body flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body flex-col justify-center">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered mb-2 w-full max-w-md" />
                            <input type="text" placeholder="Subject" className="input input-bordered mb-2 w-full max-w-md" />
                            <input type="text" placeholder="Your Message" className="input input-bordered mb-2 h-20 w-full max-w-md" />
                        </div>

                        <div className='flex justify-center'> <ButtonPrimary text="Submit" /></div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;