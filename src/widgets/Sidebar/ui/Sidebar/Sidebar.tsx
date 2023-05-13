import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
  className?: string,
  lang?: string,
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const {className, lang} = props
  const { t } = useTranslation(lang);

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
      <button onClick={onToggle}>{t('toggle-sidebar')}</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          lang={lang}
        />
      </div>
    </div>
  );
};
