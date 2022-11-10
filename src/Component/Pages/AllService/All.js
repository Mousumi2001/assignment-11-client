import React from 'react';
import { Link } from 'react-router-dom';

const All = ({ all }) => {
    const { pic, name, price, details, _id } = all;
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl">
                <figure className='h-64'><img src={pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allservice/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default All;