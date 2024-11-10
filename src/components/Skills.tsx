import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div  data-aos="zoom-in">
                    <h2 className='text-4xl md:text-5xl'>My Skills</h2>
                    <p className='text-gray-500 pt-2'>I am currently seeking an internship or a junior web developer position where I can leverage my skills to help achieve the company's digital goals. My goal is to become a professional web developer and work in a company that supports my growth and learning.</p>
                </div>
                <div >
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h3  data-aos="zoom-in">HTML</h3>
                            <h3  data-aos="zoom-in">CSS</h3>
                            <h3  data-aos="zoom-in">JAVASCRIPT</h3>
                        </div>
                        <div className='space-y-2'>
                            <h3  data-aos="zoom-in">TYPSCRIPT</h3>
                            <h3  data-aos="zoom-in">NODE.JS</h3>
                            <h3  data-aos="zoom-in">NEXT.JS</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
