import React from 'react'
import Banner from '../components/home/Banner'
import BestDeals from '../components/home/BestDeals'
import Categories from '../components/home/Categories'
import Electronic from '../components/home/Electronic'
import Essentials from '../components/home/Essentials'
import Groceries from '../components/home/Groceries'

const Home = () => {
  return (
    <>
     <Banner/>
     <BestDeals/>
     <Categories/>
     <Electronic/>
     <Essentials/>
     <Groceries/>
    </>
  )
}

export default Home
