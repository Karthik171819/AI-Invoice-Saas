import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'

//Home main page
const Home = () => {
  return (
    <div>
        <Navbar />
        <main className=""> 
          <Hero/>
          <div className="">
            <Features/>
          </div>
          <div>
             <Pricing/>
          </div>
         
        </main>
    </div>
  )
}

export default Home