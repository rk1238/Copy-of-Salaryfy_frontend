import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import FresherPlacementDetails from './FresherPlacementDetails'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <FresherPlacementDetails></FresherPlacementDetails>
    <Footer/>
   </>
  )
}

export default Index