import React from 'react';
import client1 from './../../assets/images/people1.png';
import client2 from './../../assets/images/people2.png';
import client3 from './../../assets/images/people3.png';
import Review from './Review';
const Reviews = () => {
    const reviews = [{
        _id: 1,
        name: "Winson Herry",
        img: client1,
        place: "California",
        comment: "I would highly recommend. The doctor Is great and I felt confident in his ability to assess my teeth."
    }, {
        _id: 2,
        name: "Majid Rajabi-Khamesi",
        img: client2,
        place: "Texas",
        comment: "Pleasant visit. Easy to make an appointment, friendly staff, dentist was very thorough and did an excellent job."
    }, {
        _id: 3,
        name: "Vincent Bilello",
        img: client3,
        place: "Illinois",
        comment: "Experienced and professional dentist. Staff is great and and always answer any questions or concerns."
    }]

    return (
        <div className=' my-28'>
            <h3 className='text-primary   font-bold text-xl uppercase'>Testimonial</h3>
            <h1 className='font-normal text-accent  text-4xl py-6'>What Our Patients Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;