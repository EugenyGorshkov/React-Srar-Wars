import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'

import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';

import styles from './App.module.scss'

const App = () => {
  return (
    <>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/people' exact>People</NavLink>

      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route path='/people' exact element={<PeoplePage />}/>
      </Routes>
    </>
  )
}

export default App;
