import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext)


    const handleAdd = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const rating = event.target.rating.value;
        const details = event.target.details.value;
        const pic = event.target.pic.value;
        const service = { name, price, rating, details, pic };
        console.log(service)

        //post data
        fetch('http://localhost:5000/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('New service send successfully.')

                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='m-8'>
            <form onSubmit={handleAdd}>
                <h1 className='text-white font-bold text-3xl p-5'>ADD NEW SERVICE----</h1>
                <input type='text' className='w-2/3 p-3 m-2 rounded-md font-bold text-pink-600' placeholder='serviceName' name='name' />
                <br />
                <input className='w-2/3 p-3 m-2 rounded-md font-bold text-pink-600' type='text' placeholder='price' name='price' />
                <br />
                <input className='w-2/3 p-3 m-2 rounded-md font-bold text-pink-600' type='text' placeholder='rating' name='rating' />
                <br />
                <input className='w-2/3 p-3 m-2 rounded-md font-bold text-pink-600' type='text' placeholder='details' name='details' />
                <br />
                <input className='w-2/3 p-3 m-2 rounded-md font-bold text-pink-600' type='URL' src='' name='pic' placeholder='img url' />
                <br />

                <button className='btn bg-pink-600' type='submit'>Add new Service</button>
            </form>
        </div>
    );
};

export default AddService;