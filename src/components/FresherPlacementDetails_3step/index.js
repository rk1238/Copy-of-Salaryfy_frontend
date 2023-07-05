import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import FresherPlacementDetailsFirstStep from './FresherPlacementDetails_3step'
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