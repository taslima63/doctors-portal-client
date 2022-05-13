import React from 'react';

const Review = ({ review }) => {
    const { img, name, comment, place } = review;
    return (
        <div className="card w-max:w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='py-8'>{comment}</p>

                <div className="card-actions justify-start flex items-center">
                    <div className='h-20 w-20 border-4 border-primary rounded-full'> <img className=" p-0.5 mask mask-circle" src={img} /></div>
                    <div>
                        <h2 className="card-title text-accent font-semibold">{name}</h2>
                        <h4>{place}</h4></div>
                </div>
            </div>
        </div>
    );
};

export default Review;