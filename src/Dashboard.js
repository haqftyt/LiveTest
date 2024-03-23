import React from 'react'
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About/About';
import Food from './components/Food/Food';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Review from './components/Reviews/Review';
const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Food/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Dashboard