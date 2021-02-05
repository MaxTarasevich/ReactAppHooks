import React,{useState,useEffect} from 'react';
import axios from 'axios'


export default function Main() {
    const apiKey = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=5596b7d9b7a44d80aa0db5296e839f5b';
    const [data,setData] = useState();
    useEffect(()=>{
        fetch(apiKey)
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
    })

    
}