import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import SelectCategory from './SelectCategory'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <SelectCategory></SelectCategory>
    <Footer/>
   </>
  )
}

export default Index