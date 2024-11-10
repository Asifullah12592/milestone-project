import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
 
  {
    id : 0,
    title: "Portfolio",
    img :"/Portfolio.jpg",
    tags: ["html","css","Javascript"]
   
  },
  {
    id : 1,
    title: "Todo App",
    img :"/Todo App.jpg",
    tags: ["html","css","Javascript"]
    
  },
  {
    id : 2,
    title: "Gallery",
    img :"/Gallery.jpg",
    tags: ["html","css","Javascript"]
    
  },
  {
    id : 3,
    title: "Home Page",
    img :"/HomePage.jpg",
    tags: ["Typescript","Next.Js","css","Node"]
    
  },


  {
    id : 4,
    title: "Website",
    img :"/Website Figma.jpg",
    tags: ["Typescript","Next.Js","css","Node"]
    
  },
  {
    id : 5,
    title: "Blogs",
    img :"/Blogs.jpg",
    tags: ["Typescript","Next","css","Node"]
    
  },
  
]



const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title="My Projects" />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card 
        key={el.id}
        title={el.title}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
