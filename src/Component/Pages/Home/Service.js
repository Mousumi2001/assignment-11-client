import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ card }) => {
    const { name, details, pic, price, _id } = card;
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
            <figure className='h-64 rounded-full'><img src={pic} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allservice/${_id}`}>
                        <button className="btn bg-pink-700 border-none">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;