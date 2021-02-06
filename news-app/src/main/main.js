import React,{useState,useEffect} from 'react';
import axios from 'axios';

import MyCard from "../card/card"


const style = {
display:'flex',
flexWrap:'wrap',
justifyContent:'center',
}

export default function Main() {
    const apiKey = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=5596b7d9b7a44d80aa0db5296e839f5b';
    const [data,setData] = useState();
    useEffect(()=>{
      axios.get(apiKey).then((resp)=>{
        const dataApi = resp.data;
        setData(dataApi)
      })
    },[setData])

    
  console.log(data)



    return (  <div style={style}>
      {data !== undefined ? data.articles.map((articl,index)=>{
       return <MyCard key={index} author = {articl.author} description = {articl.description} 
        urlToImage={articl.urlToImage} url={articl.url}/> 
      }) : <strong>Loarding.....</strong>}
      
   
      </div>)
    
    }

    
/*<MyCard author = {data.articles[0].author} description = {data.articles[0].description} 
      urlToImage={data.articles[0].urlToImage}/> */ 