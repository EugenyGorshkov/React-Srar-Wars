import React, { useEffect }from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTheme } from 'context';
import { getLocalStorage } from 'utils';
import { Header } from 'components/Header';
import { routesConfig } from 'routes';

import styles from './App.module.scss';

export const App: React.FC = () => {

  const isTheme = useTheme();

  const setLocalTheme = () => {
    return getLocalStorage('theme')
  }

  useEffect(() => {
    if (isTheme !== null){
      isTheme.change(setLocalTheme())
    }  
  })

  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </>
  )
}


