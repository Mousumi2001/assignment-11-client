import React from 'react';

const Section2 = () => {
    return (
        <div className='flex justify-around mb-16 bg-orange-200'>
            <div className="overflow-x-auto">
                <table className="table w-2/4 my-20">
                    <thead >
                        <tr>
                            <th className='lg:px-40 text-xl font-bold'>Some Charecteristics of food</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='font-bold text-orange-600'>get testy and healthy food</td>
                        </tr>
                        <tr>
                            <td className='font-bold text-orange-600'>fresh food</td>
                        </tr>
                        <tr>
                            <td className='font-bold text-orange-600'>they are foods rich in protein and minerals.

                            </td>
                        </tr>
                        <tr>
                            <td className='font-bold text-orange-600'>It mainly gives us energy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Section2;