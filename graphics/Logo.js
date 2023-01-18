import React from 'react';
import './logo.scss';
import axios from 'axios'
import { useState,useEffect} from 'react';

function Logo(){
  const[images,setImages] =useState([])   
    useEffect(()=>{

        axios.get('http://localhost:8082/api/settings/siteSettings').then((res)=>{
            setImages(res.data.logo.url)}).catch((err)=>{console.log(err)})  
    },[])
    console.log(images)
  return(
  <div className="logo">
    <img src={images} alt="TRBL Design Logo"/>
  </div>
  );
  };
export default Logo;
