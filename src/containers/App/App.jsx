import React, { useEffect }from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTheme } from '@context/ThemeProvider';
import { getLocalStorage } from '@utils/localStorage';
import Header from '@components/Header/Header';
import routesConfig from '@routes/routesConfig';

import styles from './App.module.scss';

const App = () => {

  const isTheme = useTheme();

    const setLocalTheme = () => {
        return getLocalStorage('theme')
    }

    useEffect(() => {
       isTheme.change(setLocalTheme())
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

export default App;
