import React from 'react';
import { useLoaderData } from 'react-router';
import All from './All';

const AllService = () => {
    const allServices = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 gap-7 justify-center my-8 lg:ml-40'>
            {
                allServices.map(all => <All key={all._id} all={all}></All>)
            }
        </div>
    );
};

export default AllService;