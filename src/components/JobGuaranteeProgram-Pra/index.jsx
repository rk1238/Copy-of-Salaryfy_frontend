import React from 'react'
import './index.css'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import JobGuarantee from './JobGuarantee'

const Index = () => {
  return (
    <div>
        <Navbar/>
        <JobGuarantee/>

        <Footer/>
    </div>
  )
}

export default Index