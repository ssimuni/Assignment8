import React, { useState, useEffect } from 'react';

const Listed_books = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortBy, setSortBy] = useState('rating'); // Default sort by rating
  const [currentTab, setCurrentTab] = useState('read'); // Default tab is 'read'

  // Load added books from local storage on component mount
  useEffect(() => {
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setReadBooks(savedReadBooks);
    setWishlistBooks(savedWishlistBooks);
  }, []);

  // Function to handle sorting
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  // Function to sort books based on selected sorting criteria
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
    <div>
      <h1 className="text-3xl font-bold mb-4">Listed Books</h1>

      {/* Sort dropdown */}
      <div className="mb-4">
        <label htmlFor="sortBy" className="mr-2 font-bold">Sort by:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a role="tab" className={`tab mr-2 bg-blue-500 text-white px-4 py-2 rounded-md ${currentTab === 'read' ? 'bg-blue-700' : ''}`} onClick={() => handleTabChange('read')}>Read</a>
        <a role="tab" className={`tab bg-blue-500 text-white px-4 py-2 rounded-md ${currentTab === 'wishlist' ? 'bg-blue-700' : ''}`} onClick={() => handleTabChange('wishlist')}>Wishlist</a>
      </div>

      {/* Tab navigation
      <div className="mb-4">
        <button className={`mr-2 bg-blue-500 text-white px-4 py-2 rounded-md ${currentTab === 'read' ? 'bg-blue-700' : ''}`} onClick={() => handleTabChange('read')}>Read</button>
        <button className={`bg-blue-500 text-white px-4 py-2 rounded-md ${currentTab === 'wishlist' ? 'bg-blue-700' : ''}`} onClick={() => handleTabChange('wishlist')}>Wishlist</button>
      </div> */}

      {/* Books list */}
      <div>
        {currentTab === 'read' && (
          <div>
            {sortBooks(readBooks).map(book => (
              <div key={book.bookId} className="mb-4">
                <div className="card card-compact bg-base-100 lg:mx-0 mt-5 lg:mt-0 mb-5 border-gray-400">
                  <h3>{book.bookName}</h3>
                  <p>Author: {book.author}</p>
                  {/* Add more book details here */}
                </div>
              </div>
            ))}
          </div>
        )}
        {currentTab === 'wishlist' && (
          <div>
            <h2 className="text-xl font-bold mb-2">Wishlist Books</h2>
            {sortBooks(wishlistBooks).map(book => (
              <div key={book.bookId} className="mb-4">
                {/* Display book details */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Listed_books;
