import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
     initial={{opacity: 0 , x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1 , x:0}}
      viewport={{once:true}}
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
     id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2' >About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties , Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
             <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
             <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                    <div className='text-4xl font-medium text-gray-800'><p>10+</p></div>
                    <p>Years Of Excellence</p>
                    </div>
                 <div> 
                    <div className='text-4xl font-medium text-gray-800'><p>12+</p></div>
                    <p>Projects Completed</p>
                 </div>
                 <div><div className='text-4xl font-medium text-gray-800'><p>20+</p></div>
                    <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <div className='text-4xl font-medium text-gray-800'><p>25+</p></div>
                    <p>Ongoing Projects</p>
                    </div>
          </div>
          <p className='my-10 max-w-lg'>
            For over a decade, we've been shaping skylines and building communities with a commitment to excellence. With 10+ years of experience in the real estate industry, our brand stands as a symbol of trust, innovation, and quality.From concept to completion, we’ve delivered over 20 million square feet of residential and commercial spaces, successfully completing 12+ landmark projects and continuing to develop 25+ ongoing ventures that redefine modern living.Our mission is simple: to turn your property dreams into reality. Whether you're investing, relocating, or building from the ground up, we’re here to guide you every step of the way with integrity, transparency, and a deep understanding of your vision.
          </p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
      </div>
      </div>
    </motion.div>
  )
}

export default About
