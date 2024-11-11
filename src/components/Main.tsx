import React from 'react'
import Navbar from "@/components/Navbar";

const Main = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/Asif.png)] bg-cover'
    style={{backgroundSize:"35%", backgroundPosition: "right 100px top 100px"}} 
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p className=""data-aos="zoom-in">I am</p>
            <p  data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine" style={{color:'#f80606'}}>Hafiz</p>
          
            <p data-aos="zoom-in">Asifullah</p>
          </div>
        </div>
        <div className='hidden lg:block'></div>
      </div>
    </div>
  )
}

export default Main
