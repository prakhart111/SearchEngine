import React ,{useEffect}from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading';

const Results = () => {
    const {results, isLoading, getResults, searchTerm,focus} = useResultContext();
    const location = useLocation();

    useEffect( ()=>{
        if(searchTerm){
            let modSearchTerm = searchTerm.replaceAll(/\s+/g,' ').trim().split(' ').join('+');
            if(location.pathname==='/video'){
                try{getResults(`/video/q=${modSearchTerm}+videos&num=8`)}
                catch(err){console.log(err)
                document.getElementById("root").innerHTML=err.message;
                }
            }else{
                try{getResults(`${location.pathname}/q=${modSearchTerm}&num=20`)}
                catch(err){console.log(err)
                    document.getElementById("root").innerHTML=err.message;
                    }
            }
        }
    },[searchTerm,location.pathname])

    if(isLoading) return <Loading />
    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
                    {!focus && results?.map(
                        ({link,title},index)=>(
                            <div key={index} className='md:w-2/5 w-full'>
                                <a href={link} target='_blank' rel='noreferrer'>
                                    <p className='text-sm'>
                                        {link.length>30 ? link.substring(0,30):link}
                                    </p>
                                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                        {title}
                                    </p>
                                </a>
                            </div>
                        )
                    )}
                </div>
            )
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {!focus && results?.map(
                        ({image,link:{href,title}},index)=>(
                            <a href={href} key={index} target='_blank' rel='noreferrer' className='sm:p-2 p-0'>
                                <img src={image?.src} alt={title} loading='lazy' />
                                <p className='w-40 break-words text-sm mt-2'>
                                    {title}
                                </p>
                            </a>
                        )
                    )}
                </div>
            );
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {!focus && results?.map(
                        ({links,id,source,title})=>(
                            <div key={id} className='md:w-2/5 w-full'>
                                <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline'>
                                    <p className='text-lg dark:text-blue-300 text-blue-700'>
                                        {title}
                                    </p>
                                </a>
                                    <div className='flex gap-4'>
                                        <a href={source?.href} target='_blank' rel='noreferrer' >
                                            {source?.href}
                                        </a>
                                    </div>
                            </div>
                        )
                    )}
                </div>
            );
        case '/video':
            return (
                <div className="flex flex-wrap mb-10">
                    {!focus && results?.map(
                        (video,index)=>(
                            <div key={index} >
                                {video?.additional_links?.[0].href.slice(0,23) === 'https://www.youtube.com' &&
                                <div className='p-2 mx-auto'>
                                    <ReactPlayer 
                                    url={video?.additional_links?.[0]?.href} controls width="320px" height='200px' 
                                /></div>
                            }
                                
                            </div>
                        )
                    )}
                </div>
            );
        default:
            return 'ERROR'; 

    }
}

export default Results