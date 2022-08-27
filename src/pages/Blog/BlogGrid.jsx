import React from 'react'
import { blogs , colorArr } from './BlogGrid.data'

const BlogGrid = ({count = 0}) => {
const data = blogs.filter((e,i)=> i>=count)
  return (
    <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w-3/4 md:w-5/6 sm:w-5/6 m-auto gap-3 pt-20'>
        {
            data.map((e , i)=>
            <a href={e.link} key={i}  >
                <div className=' shadow-lg cursor-pointer'>
                    <div className=''>
                    <img src={e.img} className = 'p-5 h-40 w-full' style={{ backgroundColor : colorArr[Math.floor(Math.random() * 11)]}} />
                    </div>
                    <p className='pt-5 pb-8 text-md font-bold'>{e.title}</p>
                </div>
            </a>
                
            )
        }
    </div>
  )
}

export default BlogGrid