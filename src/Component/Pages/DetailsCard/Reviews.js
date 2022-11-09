import React from 'react';

const Reviews = () => {

    return (
        <div>
            <form>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-warning" placeholder="Bio"></textarea>
                <input type='submit'> Submit</input>
            </form>
        </div>
    );
};

export default Reviews;