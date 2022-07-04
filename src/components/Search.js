import React, { useState } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider';
import Links  from './Links';

const Search = () => {
  const { setSearchTerm,focus,setFocus } = useResultContext();
  const [text, setText] = useState('');
  const [previousSearches,updatePrevSearch]=useState([])
  

  return (
    <div 
    className="relative w-full p-4 items-center"
    >
      <div className={!focus?"flex flex-col items-center pt-10 content-center":"backdrop-blur-md flex flex-col rounded-md items-center content-center w-[100%] h-[120%] bg-gray-200/[40%] mt-20"}>
      
      <input
        value={text}
        type="search"
        className={!focus?"relative sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                          :"relative sm:w-96 w-90 h-10 dark:bg-indigo-300/[40%] drop-shadow-[0_100px_100px_rgba(90,90,220,1)] dark:shadow-[0_100px_100px_rgba(100,100,200,1)] rounded-md outline-none p-7 dark:text-white hover:shadow-xl mb-2"}
        placeholder="🔎 Search"
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==='Enter'){setSearchTerm(text)
          updatePrevSearch([...previousSearches,<div key={Math.random()} className='bg-blue-200 rounded-xl dark:bg-indigo-200/[50%] w-fit p-2 m-1'>{text}</div>])
          setFocus(false)
          }
        }}
      />
      {focus && <div className='w-full p-5 m-1 z-10'>
         {previousSearches.length !== 0 ? <><p className='p-1'>Recent Searches</p>
            <div className="flex flex-col">
              {previousSearches}<p className='m-1 p-1'>&nbsp;</p>
          </div></>:<p>No Recent Searches</p>}
      </div>}
      </div>
     {!focus && <Links />}
    </div>
  );
};
export default Search
