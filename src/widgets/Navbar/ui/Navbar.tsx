import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string,
  lang?: string,
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const {className, lang} = props
  const { t } = useTranslation(lang);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('link-main')}
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('link-about')}
        </AppLink>
      </div>
    </div>
  );
};
