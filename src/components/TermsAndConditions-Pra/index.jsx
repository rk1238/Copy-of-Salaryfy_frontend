import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import TermsAndConditions from './TermsAndConditions'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <TermsAndConditions></TermsAndConditions>
    <Footer/>
   </>
  )
}

export default Index