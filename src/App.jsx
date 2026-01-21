import React, { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero'
import Programs from './Components/Programs.jsx'
import Title from './Components/Title.jsx'
import About from './Components/About.jsx'
import Campus from './Components/Campus.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
  AOS.init({
    duration: 1200, // animation duration (ms)
    once: true,     // animate only once
  });
}, []);


  return (
    <div>
      <Navbar/>
      <Hero data-aos ="fade-up"/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' data-aos="zoom-in"/>
      <Programs data-aos="fade-up"/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos' data-aos="fade-up"/>
      <Campus data-aos="zoom-in"/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'data-aos="fade-up"/>
      <Testimonials data-aos="fade-left"/>
      <Title subTitle='Contact Us' title='Get in Touch'data-aos="fade-up"/>
      <Contact data-aos="zoom-in-up"/>
      <Footer/>
      </div>
    </div>
  )
}

export default App