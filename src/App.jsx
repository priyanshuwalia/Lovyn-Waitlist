import React from 'react'
import Footer from './components/Footer'
import WaitListForm from './components/WaitListForm'
import InfoCards from './components/InfoCards'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesScroll from './components/FeaturesScroll'

const App = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <FeaturesScroll />
      <InfoCards />
      <WaitListForm />
      <Footer/>
    </div>
  
  )
}

export default App