import React from 'react';
import cavity from './../../assets/images/cavity.png';
import whitening from './../../assets/images/whitening.png';
import fluoride from './../../assets/images/fluoride.png';
import Service from './Service';
import ServiceBanner from './ServiceBanner';

const Services = () => {
    const services = [{
        _id: 1,
        img: fluoride,
        cardTitle: "Fluoride Treatment",
        cardText: "Fluoride is a natural mineral that builds strong teeth and prevents cavities."
    },
    {
        _id: 2,
        img: cavity,
        cardTitle: "Cavity Filling",
        cardText: "A cavity filling is when the dentist fills the opening in your tooth with some kind of material"
    }, {
        _id: 3,
        img: whitening,
        cardTitle: "Teeth Whitening",
        cardText: "Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile. "
    }]
    return (
        <div className=' my-28'>
            <h3 className='text-primary text-center  font-bold text-xl uppercase'>Our Services</h3>
            <h1 className='font-normal text-accent text-center text-4xl py-6'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Services;