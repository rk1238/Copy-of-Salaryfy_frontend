import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import Payment from './Payment'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <Payment></Payment>
    <Footer/>
   </>
  )
}

export default Index