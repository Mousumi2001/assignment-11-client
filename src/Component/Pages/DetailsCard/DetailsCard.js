import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import Reviews from './Reviews';
// import { FaUser } from "react-icons/fa";

const DetailsCard = () => {
    const { pic, name, price, details, _id, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault()
        const reviewname = event.target.reviewname.value;
        const text = event.target.text.value;
        const email = user?.email || 'unregisterd';

        const review = { name, reviewname, text, _id, email, pic };
        console.log(review);

        fetch('https://assignment-11-server-inky.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div >
            <div className='lg:ml-36  lg:my-20 '>
                <div className="card lg:w-5/6 bg-base-100 shadow-xl image-full">
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{name}</h2>
                        <h2 className="card-title text-3xl">Price: {price}</h2>
                        <h2 className="card-title text-3xl">Rating: {rating} view</h2>
                        <p className='text-xl'>{details}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* create add review form */}
            <div className='m-10'>
                <h1 className='text-2xl font-bold'>ADD REVIEW</h1>
                <form onSubmit={handleAddReview} className='border-r-4 border-blue-300 border-l-4 border-blue-200 lg:mx-40 lg:py-20'>
                    <input type='text' className='w-2/4 text-xl p-3 rounded-xl my-2' name='reviewname' placeholder='reviewname' />
                    <br />
                    <input type='text' className='w-2/4 text-xl p-3 rounded-xl my-2' name='text' placeholder='text' />
                    <br />
                    <button type='submit' className='bg-pink-600 font-bold text-white p-3 rounded-xl'>Add Review</button>

                </form>


            </div>

        </div>
    );
};

export default DetailsCard;