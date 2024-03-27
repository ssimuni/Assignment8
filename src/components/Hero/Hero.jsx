import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero w-3/4 mx-auto h-[450px] rounded-2xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="hero.png" className=" w-40 lg:w-72 rounded-lg" />
                <div>
                    <h1 className="lg:text-6xl text-2xl font-bold lg:mr-40 mb-20">Books to freshen up <br />
                        your bookshelf</h1>
                    <Link to="/listed" className="btn mr-5 bg-green-500 text-white font-semibold">View The List</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero