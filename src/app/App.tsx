import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";



export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Theme</button>
      <Suspense fallback={<div>load...</div>}>
        <Routes>
          <Route
            path={'/'}
            element={<MainPage />}
          />
          <Route
            path={'/about'}
            element={<AboutPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
