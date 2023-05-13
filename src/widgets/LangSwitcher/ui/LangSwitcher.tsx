import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
  className?: string,
  lang?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const {className, lang} = props
  const { t, i18n } = useTranslation(lang);

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggle}
      className={classNames(
        cls.LangSwitcher,
        {},
        [className]
      )}
    >
      {t('language')}
    </Button>
  );
};
