import React from 'react';
import doctor from './../../assets/images/doctor.png';
import appointment from './../../assets/images/appointment.png';
import ButtonPrimary from '../Shared/ButtonPrimary/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-8 lg:p-0'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make An Appointment Today</h2>
                <p className='text-white my-5'>Specialists, like psychiatrists, dentists, gynaecologists and pediatricians, require appointments in advance.Physical examination services (such as for company medicals) also requires an appointment to be booked well in advance. </p>
                <ButtonPrimary text="Appointment" />
            </div>
        </section>
    );
};

export default MakeAppointment;