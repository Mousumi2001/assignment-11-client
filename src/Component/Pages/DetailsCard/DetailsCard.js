import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import Reviews from './Reviews';
// import { FaUser } from "react-icons/fa";

const DetailsCard = () => {
    const { pic, name, price, details, _id, rating } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = form.name.value;
        const email = user?.email || 'unregsiterd';
        // const photo = user?.img || <FaUser></FaUser>;
        const text = form.text.value;
        console.log(name, email, text)

        const review = {
            // review: _id,
            // price,
            reviewerName,
            // email,

            text

        }

        fetch('https://assignment-11-server-inky.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
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

                <form onSubmit={handleReview} className='border-r-4 border-blue-300 border-l-4 border-blue-200 lg:mx-40 lg:py-20'>
                    <input name='reviewerName' type="text" placeholder="name" className="input input-bordered  w-1/2" />
                    <br />
                    <br />
                    <input name='email' type="text" placeholder="email" className="input input-bordered  w-1/2" />
                    <br />
                    <br />
                    <input name='photo' type="photo" placeholder="photo" className="input input-bordered  w-1/2" />
                    <br />
                    <br />
                    <textarea name='text' className="textarea textarea-error w-1/2" placeholder="Bio" required></textarea>
                    <br />
                    <br />
                    {/* <input type='submit' placeholder='Submit' /> */}
                    <input type='submit' className="btn bg-pink-600" value='Add Review' />
                </form>


            </div>

        </div>
    );
};

export default DetailsCard;