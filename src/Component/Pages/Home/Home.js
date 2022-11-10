import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
// import Header from '../../Header/Header';
import Service from './Service';

const Home = () => {

    const [cards, setCards] = useState([])
    console.log(cards)
    useEffect(() => {
        fetch('https://assignment-11-server-inky.vercel.app/services')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>

            {/* section 1 */}
            <div>
                <Banner></Banner>
            </div>


            {/* section 2 */}
            <div className='my-14'>
                <div className='grid lg:grid-cols-3 gap-7'>
                    {
                        cards.map(card => <Service key={card._id} card={card}></Service>)
                    }

                </div>
                <Link to='/allservice'>
                    <button className="btn  bg-pink-700 font-bold m-5">See All</button>
                </Link>
            </div>



            {/* section 3 */}
            <Section1></Section1>

            {/* section 4 */}
            <Section2></Section2>


        </div>
    );
};

export default Home;