
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Project_page from './Components/Project_page/Project_page'
import { useTranslation } from 'react-i18next';
import News_page from './Components/News_page/News_page';
import Contact_page from './Components/Contact__page/Contact_page';
import About_page from './Components/About_page/About_page';
import { useState } from 'react';



function App() {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng') || 'en';

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage); 
  };
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Project_page" element={<Project_page/>}/>
      <Route path="/News_page" element={<News_page/>}/>
      <Route path="/Contact_page" element={<Contact_page/>}/>
      <Route path="/About_page" element={<About_page/>}/>
    </Routes>
    </>
  )
}

export default App
