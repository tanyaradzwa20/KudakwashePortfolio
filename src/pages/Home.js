import React from 'react'
import Billboard from './Componets/Hero'
import About from './Componets/About'
import Portfolio from './Componets/Portfolio'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'




function Home (){
  return (
    <>
        <Billboard/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home;