import React from 'react'

const Hero = () => {
    return (
        <div className="hero w-3/4 mx-auto h-[450px] rounded-2xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="hero.png" className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-6xl font-bold mr-40 mb-20">Books to freshen up <br />
                        your bookshelf</h1>
                    <a className="btn mr-5 bg-green-500 text-white font-semibold">View The List</a>
                </div>
            </div>
        </div>
    )
}

export default Hero