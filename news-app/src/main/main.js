import React,{useState,useEffect} from 'react';
import axios from 'axios'


export default function Main() {
    const apiKey = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=5596b7d9b7a44d80aa0db5296e839f5b';
    const [data,setData] = useState();
    useEffect(()=>{
      axios.get(apiKey).then((resp)=>{
        const dataApi = resp.data;
        setData(dataApi)
      })
      
    },[setData])
    return (  <h1>
      Main works {console.log(data.articles)}
      </h1>)
    
    }

    
