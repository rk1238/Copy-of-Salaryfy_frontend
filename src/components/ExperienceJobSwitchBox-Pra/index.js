import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import JobSwitchBox from './JobSwitchBox'
import './index.css'

const Index = () => {
  return (
   <>
    <Navbar/>
 <JobSwitchBox></JobSwitchBox>
    <Footer/>
   </>
  )
}

export default Index