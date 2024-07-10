import React from 'react'
import Navbar from './Compononts/Navbar'
import Section1 from './Compononts/Section1'
import Section2 from './Compononts/Section2'
import Section3 from './Compononts/Section3'
import Section4 from './Compononts/Section4'
import Section5 from './Compononts/Section5'
import Section6 from './Compononts/Section6'
import Footer from './Compononts/Footer'

function Template() {
  return (
    <div>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
        
    </div>
  )
}

export default Template