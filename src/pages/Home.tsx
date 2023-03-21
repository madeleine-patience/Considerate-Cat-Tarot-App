import React from 'react'
import Button from '../components/Button'
import {Routes, Route, useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const navigateToTarotRead = () => {
    // 👇️ navigate to /contacts
    navigate('/tarotRead');
  };
  return (
    <div className=''>
        <img className=" max-w-6xl mx-auto mt-40 rounded-lg m-2" src="/Art/titlePage.jpg"></img>
        <Button buttonName="Enter" onClick={()=>navigateToTarotRead()}> </Button>
    </div>
  )
}

export default Home