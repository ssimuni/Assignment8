import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Listed_books from './components/Listed_books/Listed_books';
import Pages_to_read from './components/Pages_to_read/Pages_to_read';
import Book_details from './components/Book_details/Book_details';
import Error from './components/Error/Error.jsx'
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <Listed_books></Listed_books>
      },
      {
        path: '/pages',
        element: <Pages_to_read></Pages_to_read>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/book/:id',
        element: <Book_details></Book_details>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/book/:id',
        element: <Listed_books></Listed_books>,
        loader: () => fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
