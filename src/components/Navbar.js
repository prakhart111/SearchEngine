import React from 'react'
import {Link} from 'react-router-dom'
import userLogo from '../man.png'
import Search from './Search'

const Navbar = (props) => {
  return (
  <div className='flex flex-col max-h-fit dark:text-white relative -top-12 sm:top-0 text-gray-900'>
    <div className='bg-indigo-200 p-1 text-sm flex pl-3 pr-3 dark:text-black justify-around'>
      <p>Thanks for visiting. "Do ⭐ the Repo"</p>
      <p className=''>SearchEngine Version 1.0</p>
      <a href='https://github.com/prakhart111/SearchEngine'>GitHub @PrakharTandon</a>
    </div>
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-center gap-5 items-center mx-auto">
        <Link to="/" className="flex items-center">
            {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SearchEngine</span>
        </Link>
        
        <Link to="/about" 
        className="block py-2 pr-2 pl-3">
            <img src={userLogo} alt='' width='65%'/>
         </Link>
        

        <button className='bg-green-300 rounded-md p-2 dark:text-black'
        onClick={()=>{
          props.setDarkTheme(!props.darkTheme)
        }}>
          {props.darkTheme?<>Light</>:<>Dark</>}
        </button>
      </div>
    </nav>
    <div className='mx-auto'>
          <Search />
        </div>
</div>
  
  )
}

export default Navbar