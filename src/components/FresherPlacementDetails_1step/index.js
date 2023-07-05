import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import FresherPlacementDetailsFirstStep from './FresherPlacementDetails_1step'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <FresherPlacementDetailsFirstStep></FresherPlacementDetailsFirstStep>
    <Footer/>
   </>
  )
}

export default Index