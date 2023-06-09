import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import ListIcon from 'shared/assets/icons/bi_list.svg'
import TiledIcon from 'shared/assets/icons/fe_tiled.svg'
import { ArticleView } from 'entities/Article'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'widgets/Icon/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    Icon: ListIcon,
  },
]

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> =
  memo((props: ArticleViewSelectorProps) => {
    const {
      className,
      view,
      onViewClick,
    } = props

    const onClick = (view: ArticleView) => () => {
      onViewClick?.(view)
    }

    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {
          viewTypes.map(viewType => (
            <Button
              theme={ThemeButton.CLEAR}
              key={viewType.view}
              onClick={onClick(viewType.view)}
            >
              <Icon
                className={classNames('', { [cls.selected]: viewType.view === view })}
                Svg={viewType.Icon}
              />
            </Button>
          ))
        }
      </div>
    )
  })
