import React, { memo } from 'react'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
  className?: string
  children: React.ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const height = window.innerHeight - 100

export const DrawerContent: React.FC<DrawerProps> = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props
  const { theme } = useTheme()

  const {
    Gesture,
    Spring,
  } = useAnimationLibs()

  const {
    useSpring,
    config,
    a,
  } = Spring

  const {
    useDrag,
  } = Gesture

  const [{ y }, api] = useSpring(() => ({ y: height }))

  const openDrawer = React.useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  React.useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: {
        top: 0,
      },
      rubberband: true,
    }
  )

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </a.div>
      </div>
    </Portal>
  )
})

export const Drawer = memo((props: DrawerProps) => {
  const {
    isLoaded,
  } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
})
