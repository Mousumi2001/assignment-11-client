import React from 'react';

const Service = ({ card }) => {
    const { name, details, pic, price } = card;
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
            <figure className='h-64'><img src={pic} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;