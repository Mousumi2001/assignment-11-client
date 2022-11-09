import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsCard = () => {
    const { pic, name, price, details, _id, rating } = useLoaderData();
    return (
        <div >
            <div className='ml-36'>
                <div className="card w-5/6 bg-base-100 shadow-xl image-full">
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
            <div>
                <h1>review section</h1>
            </div>
        </div>
    );
};

export default DetailsCard;