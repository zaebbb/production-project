import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const {className} = props

  const onToggle = () => {
    setCollapse(prev => !prev);
  }

  return (
    <div
      className={
        classNames(cls.Sidebar,
          {
            [cls.collapsed]: collapse
          },
          [className]
        )
      }
    >
      <button onClick={onToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
