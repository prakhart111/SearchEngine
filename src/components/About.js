import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='absolute inset-0 w-screen bg-indigo-300 h-screen mt-[100px] overflow-x-clip'>
            
 <section className="text-gray-400 body-font bg-indigo-300 dark:bg-gray-900 p-2">
 <Link to='/' className='p-2 flex m-2 rounded text-gray-700 dark:text-gray-300 bg-gray-200/[80%] dark:bg-gray-100/[20%] ml-5 w-fit'>
     <img src="https://img.icons8.com/color/48/000000/circled-left-2--v1.png" alt='' width='30%'/>
     <span>&nbsp;Back</span>
    </Link>
  <div className="container px-5 py-16 mx-auto bg-indigo-300 dark:bg-gray-900">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-white mb-4">The SearchEngine Project</h1>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed xl:w-2/4 lg:w-full mx-auto">
          This project is built on ReactJS and uses the Google Search API from RapidAPI. It serves all four types of results provided
          by the API i.e., All, News, Images, Videos. SearchEngine also shows recent search results. The API offers 600 requests per month in free version.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed xl:w-2/4 lg:w-full mx-auto">
          SearchEngine offers Dark mode as well with a minimalistic yet elegant UI, designed by the developer himself. You can connect with the 
          developer by clicking the button below.
      </p>
    </div>
    <h1 className="sm:text-xl text-lg font-medium text-center title-font text-gray-900 dark:text-white mb-4">Major Features and Technologies Used</h1>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">ReactJS and React Router DOM</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Tailwind CSS</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Google Search API</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Context API</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Hosted on Netlify</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Dark Mode Support</span>
        </div>
      </div>
    </div>
    <a href='https://linktr.ee/prakhartandon' target='_blank' rel='noreferrer'><button className="flex mx-auto mt-11 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Connect with the Developer</button></a>
  </div>
</section>
    
    
    </div>
  )
}

export default About