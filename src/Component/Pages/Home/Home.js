import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
// import Header from '../../Header/Header';
import Service from './Service';

const Home = () => {

    const [cards, setCards] = useState({})
    console.log(cards)
    useEffect(() => {
        fetch('https://assignment-11-server-inky.vercel.app/services')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>

            <h1>this is home</h1>
            <div>
                <div className='grid grid-cols-3 gap-7'>
                    {/* {
                        cards.map(card => <Service key={card._id} card={card}></Service>)
                    } */}

                </div>
                <Link to='/allservice'>
                    <button className="btn  btn-info font-bold m-5">See All</button>
                </Link>
            </div>
            <Banner></Banner>


        </div>
    );
};

export default Home;