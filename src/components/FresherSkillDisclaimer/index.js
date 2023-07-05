import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import EligibilityForm1 from './FresherSkillDisclaimer'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <EligibilityForm1></EligibilityForm1>
    <Footer/>
   </>
  )
}

export default Index