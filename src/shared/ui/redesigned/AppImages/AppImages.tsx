import React, { type ImgHTMLAttributes, memo } from 'react'

interface AppImagesProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: React.ReactElement
  errorFallback?: React.ReactElement
}

export const AppImages: React.FC<AppImagesProps> = memo((props: AppImagesProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useLayoutEffect(() => {
    const image = new Image()
    image.src = src ?? ''
    image.onload = () => {
      setIsLoading(false)
    }
    image.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
    <img className={className} src={src} alt={alt} {...otherProps} />
  )
})
