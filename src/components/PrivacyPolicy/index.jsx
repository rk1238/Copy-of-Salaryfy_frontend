import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import PrivacyPolicy from './PrivacyPolicy'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <PrivacyPolicy></PrivacyPolicy>
    <Footer/>
   </>
  )
}

export default Index