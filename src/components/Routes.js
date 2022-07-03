import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Results from './Results';
import About from './About'

const Router = () => (
  <div className='p-4'>
    
    <Routes>
      <Route path='/' element={<Navigate from='/' to='/search' />}/>
      <Route path='/search' element={<Results />}/>
      <Route path='/image' element={<Results />}/>
      <Route path='/news' element={<Results />}/>
      <Route path='/video' element={<Results />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </div>

);

export default Router