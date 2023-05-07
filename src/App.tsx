import React, {Suspense} from 'react';
import './styles/index.scss'
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



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
            element={<MainPageAsync />}
          />
          <Route
            path={'/about'}
            element={<AboutPageAsync />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
