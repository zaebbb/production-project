import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button/Button";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const {className} = props
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {
        theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  );
};
