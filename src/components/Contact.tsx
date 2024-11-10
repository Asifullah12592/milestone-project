import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'></div>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'  data-aos="zoom-in">Send me a Massage by submitting the Form</p>
                <div className='flex gap-3 items-center' data-aos="zoom-in">
                    <AiOutlineMail size={30} /> asifkhan125925@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in">
                    <BsTelephone size={30} /> 03422703531
                </div>
                <div className='space-y-8'>
           <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent' id='name' />
           </div>
           <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent' id='email' />
           </div>
         
           <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="message">Message</label>
            <textarea
            className='bg-transparent border border-accent' 
            id='message' rows={8} >
                </textarea>
           </div>
           <button className='bg-accent p-2 px-6 ' data-aos="zoom-in"> Submit</button>
            </div>
        </div>
        </div>
    )
}

export default Contact
