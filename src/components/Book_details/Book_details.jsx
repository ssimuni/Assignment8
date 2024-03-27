import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const Book_details = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const savedReadBooks = JSON.parse(localStorage.getItem('readBooks'));
        const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks'));

        if (savedReadBooks) {
            setReadBooks(savedReadBooks);
        }

        if (savedWishlistBooks) {
            setWishlistBooks(savedWishlistBooks);
        }
    }, []);

    const addToRead = () => {
        if (!readBooks.some(existingBook => existingBook.bookId === book.bookId)) {
            const updatedReadBooks = [...readBooks, book];
            setReadBooks(updatedReadBooks);
            localStorage.setItem('readBooks', JSON.stringify(updatedReadBooks));
            Swal.fire({
                icon: 'success',
                title: 'Added to Read!',
                text: `You have added "${book.bookName}" to your Read list.`,
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Already Added!',
                text: `You have already added "${book.bookName}" to your Read list.`,
            });
        }
    };
    
    const addToWishlist = () => {
        if (!readBooks.some(existingBook => existingBook.bookId === book.bookId) && !wishlistBooks.some(existingBook => existingBook.bookId === book.bookId)) {
            const updatedWishlistBooks = [...wishlistBooks, book];
            setWishlistBooks(updatedWishlistBooks);
            localStorage.setItem('wishlistBooks', JSON.stringify(updatedWishlistBooks));
            Swal.fire({
                icon: 'success',
                title: 'Added to Wishlist!',
                text: `You have added "${book.bookName}" to your Wishlist.`,
            });
        } else if (readBooks.some(existingBook => existingBook.bookId === book.bookId)) {
            Swal.fire({
                icon: 'warning',
                title: 'Already Added!',
                text: `You have already read "${book.bookName}".`,
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Already Added!',
                text: `You have already added "${book.bookName}" to your Wishlist.`,
            });
        }
    };
    

    console.log(book);
    return (
        <div>
            <div className="card card-compact bg-base-100 lg:mx-0 mt-5 lg:mt-0 mb-5">

                <div className='lg:flex'>
                    <div className='m-5'>
                        <img src={book.image} alt="Shoes" className='rounded-2xl lg:w-full lg:h-full' />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-4xl font-bold">{book.bookName}</h2>
                        <p className='text-black font-semibold text-xl'>By: {book.author}</p>
                        <hr className='border-slate-600' />
                        <p className='text-left mr-20 text-xl font-semibold'>{book.category}</p>
                        <hr className='border-slate-600' />
                        <p><span className='font-bold'>Review:</span> {book.review}</p>
                        <div className='flex'>
                            <div><h2 className='mt-3 mr-10 font-bold'>Tags: </h2></div>
                            <div>
                                {book.tags.map((tag, index) => (
                                    <button key={index} className="btn bg-base-200 text-green-500 rounded-full font-bold text-[15px] mr-10">{tag}</button>
                                ))}</div>
                        </div>
                        <hr className='border-slate-600' />

                        <p>Number of pages: <span className='font-bold'>{book.totalPages}</span></p>

                        <p>Publisher: <span className='font-bold'>{book.publisher}</span></p>

                        <p>Year of publishing: <span className='font-bold'>{book.yearOfPublishing}</span></p>

                        <p>Rating: <span className='font-bold'>{book.rating}</span></p>

                        <div>
                            <a className="btn text-black font-semibold w-32 mr-10 border-gray-500 hover:bg-green-500" onClick={addToRead}>Read</a>
                            <a className="btn bg-blue-400 text-white font-semibold w-32 hover:bg-blue-600" onClick={addToWishlist} >Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Book_details