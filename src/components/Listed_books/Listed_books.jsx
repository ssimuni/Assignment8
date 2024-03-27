import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listed_books = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortBy, setSortBy] = useState('rating');
  const [currentTab, setCurrentTab] = useState('read'); 


  useEffect(() => {
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setReadBooks(savedReadBooks);
    setWishlistBooks(savedWishlistBooks);
  }, []);

 
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

 
  const sortBooks = (books) => {
    switch (sortBy) {
      case 'rating':
        return books.slice().sort((a, b) => b.rating - a.rating);
      case 'pages':
        return books.slice().sort((a, b) => a.totalPages - b.totalPages);
      case 'year':
        return books.slice().sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      default:
        return books;
    }
  };

  return (
    <div className='w-3/4 mx-auto'>
      <h1 className="text-4xl text-center bg-gray-100 h-20 place-content-center rounded-2xl font-bold mb-4 mt-10">Books</h1>


      <div className="mb-4 flex mx-auto">
        <select id="sortBy" value={sortBy} onChange={handleSortByChange} className="bg-green-500 text-white w-40 h-16 rounded-2xl font-bold mx-auto my-10">
          <option className='bg-white text-black'>Sort by</option>
          <option value="rating" className='bg-white text-black'>Rating</option>
          <option value="pages" className='bg-white text-black'>Number of Pages</option>
          <option value="year" className='bg-white text-black'>Published Year</option>
        </select>
      </div>

      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a role="tab" className={`tab px-4 py-2 ${currentTab === 'read' ? 'tab-active' : ''}`} onClick={() => handleTabChange('read')}>Read</a>
        <a role="tab" className={`tab px-4 py-2 ${currentTab === 'wishlist' ? 'tab-active' : ''}`} onClick={() => handleTabChange('wishlist')}>Wishlist</a>
      </div>

      <div>
        {currentTab === 'read' && (
          <div>
            {sortBooks(readBooks).map(book => (
              <div key={book.bookId} className="mb-4 border mt-5 border-gray-400 rounded-2xl flex">
                <div><img src={book.image} className='w-64 h-64 m-5 rounded-2xl' alt="" /></div>

                <div> <h3 className='text-2xl font-bold mt-3'>{book.bookName}</h3>
                  <p className='font-semibold mt-3'>By: {book.author}</p>
                  <div className='flex mt-5'>
                    <div><h2 className='mt-3 mr-10 font-bold'>Tags: </h2></div>
                    <div>
                      {book.tags.map((tag, index) => (
                        <button key={index} className="btn bg-base-200 text-green-500 rounded-full font-bold text-[15px] mr-10">{tag}</button>
                      ))}
                    </div>
                    <div className='flex mt-3'>
                      <img src="yearofpublishing.png" alt="" className='w-5 h-6 mr-2' />
                      <p>Year of publishing: {book.yearOfPublishing}</p>
                    </div>
                  </div>

                  <div className='flex mt-5'>
                    <div className='flex'>
                      <img src="publisher.png" alt="" className='mr-3' />
                      <p>Publisher: {book.publisher}</p>
                    </div>

                    <div className='flex ml-10'>
                      <img src="page.png" alt="" className='mr-3' />
                      <p>Page: {book.totalPages}</p>
                    </div>
                  </div>
                  <hr className='border-slate-400 my-5 w-[800px]' />

                  <a className="btn bg-blue-100 text-blue-400 w-40 rounded-full mr-5">Category: {book.category}</a>

                  <a className="btn bg-orange-100 text-orange-400 w-36 rounded-full mr-5">Rating: {book.rating}</a>

                  <Link to="/book/:bookId" className="btn bg-green-500 text-white font-semibold w-32 rounded-full">View Details</Link></div>
              </div>

            ))}
          </div>
        )}
        {currentTab === 'wishlist' && (
          <div>
            {sortBooks(wishlistBooks).map(book => (
              <div key={book.bookId} className="mb-4 border mt-5 border-gray-400 rounded-2xl flex">
                <div><img src={book.image} className='w-64 h-64 m-5 rounded-2xl' alt="" /></div>

                <div> <h3 className='text-2xl font-bold mt-3'>{book.bookName}</h3>
                  <p className='font-semibold mt-3'>By: {book.author}</p>
                  <div className='flex mt-5'>
                    <div><h2 className='mt-3 mr-10 font-bold'>Tags: </h2></div>
                    <div>
                      {book.tags.map((tag, index) => (
                        <button key={index} className="btn bg-base-200 text-green-500 rounded-full font-bold text-[15px] mr-10">{tag}</button>
                      ))}
                    </div>
                    <div className='flex mt-3'>
                      <img src="yearofpublishing.png" alt="" className='w-5 h-6 mr-2' />
                      <p>Year of publishing: {book.yearOfPublishing}</p>
                    </div>
                  </div>

                  <div className='flex mt-5'>
                    <div className='flex'>
                      <img src="publisher.png" alt="" className='mr-3' />
                      <p>Publisher: {book.publisher}</p>
                    </div>

                    <div className='flex ml-10'>
                      <img src="page.png" alt="" className='mr-3' />
                      <p>Page: {book.totalPages}</p>
                    </div>
                  </div>
                  <hr className='border-slate-400 my-5 w-[800px]' />

                  <a className="btn bg-blue-100 text-blue-400 w-36 rounded-full mr-5">Category: {book.category}</a>

                  <a className="btn bg-orange-100 text-orange-400 w-36 rounded-full mr-5">Rating: {book.rating}</a>

                  <a className="btn bg-green-500 text-white font-semibold w-32 rounded-full">View Details</a></div>
              </div>

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Listed_books;
