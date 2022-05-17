import React from 'react';
import chair from './../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between">

                    <div> <img src={chair} alt='dentis chair' className="max-w-sm rounded-lg shadow-2xl md:ml-12" /></div>
                    <div className='md:pr-12 '>
                        <div className='shadow-lg rounded-4'><DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        /> </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;