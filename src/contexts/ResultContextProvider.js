import React , {useState, createContext, useContext} from "react";

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider=({children})=>{
    const [results,setResults] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [searchTerm,setSearchTerm] = useState()
    const [focus,setFocus]=useState(true)
    let response;

        // type is = /images , /videos etc
    const getResults = async(type)=>{
        setIsLoading(true)
try{
        response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers:{
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })

}catch(err){
    console.log(err)
}
console.log('Fetch Successful')
        const data = await response.json()
        console.log(data)
        
        if(type.includes('/news')){
            setResults(data.entries)
        } else if(type.includes('/image')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }

        setIsLoading(false)
    }

    return(
        <ResultContext.Provider value={ {getResults,results,searchTerm,setSearchTerm,isLoading,focus,setFocus} }>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext =()=> useContext(ResultContext)