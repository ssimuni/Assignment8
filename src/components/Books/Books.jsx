import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='mb-10 ml-20'>
            <div className='lg:grid lg:grid-cols-3'>
                {
                    books.map(book => <Book
                        book={book}>
                    </Book>)
                }
            </div>
        </div>

    )
}

export default Books