import React from 'react';

const Reviews = ({ all }) => {
    const { name, foodName, text, pic } = all;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={pic} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;