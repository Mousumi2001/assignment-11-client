import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel  ">
                <div id="item1" className="carousel-item w-full h-96">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fVteXNVbJejGLybVXCmQBwHaE8&pid=Api&P=0" alt='' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-96">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.jOJEVZeaGX_9toxVy7GdNAHaEK&pid=Api&P=0" alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-96">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.skabsyOIzUKq8-8mn2kTqQHaD-&pid=Api&P=0" alt='' className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full h-96">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.dnDqyNMn91PGXu7DLPyOZwHaEN&pid=Api&P=0" alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;