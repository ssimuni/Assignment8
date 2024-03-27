import React from 'react'
import Hero from '../Hero/Hero'
import Books from '../Books/Books'
import Book_title from '../Book_title'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Book_title></Book_title>
      <Books></Books>
    </div>
  )
}

export default Home