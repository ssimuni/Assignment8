import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card card-compact w-96 bg-base-100 border-2 border-slate-300 shadow-md lg:mx-0 mt-5 lg:mt-0 mb-5">
                    <div className='m-5'><img src={image} alt="Shoes" className='rounded-2xl' /></div>
                    <div className="card-body">

                        <div className='flex justify-around'>
                            {tags.map((tag, index) => (
                                <button key={index} className="btn bg-base-200 text-green-500 rounded-full font-bold text-[15px]">{tag}</button>
                            ))}
                        </div>

                        <h2 className="card-title">{bookName}</h2>
                        <p className='text-black font-semibold'>By: {author}</p>
                        <hr className='border-slate-600 border-dashed' />

                        <div className='flex justify-around'>
                            <div className='flex justify-center place-items-center'>
                                <p className='text-left mr-20'>{category}</p>
                            </div>
                            <div className='flex place-items-center'>
                                <p className='text-right mr-5'>{rating}</p>
                                <img src="Vector.png" className='w-4 h-4' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Book