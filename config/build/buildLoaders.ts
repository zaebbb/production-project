import type webpack from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const codeBabelLoader = buildBabelLoader({
    isDev,
    isTsx: false,
  })
  const tsxCodeBabelLoader = buildBabelLoader({
    isDev,
    isTsx: true,
  })

  const cssLoader = buildCssLoader(isDev)

  const svgLoader = buildSvgLoader

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    fileLoader,
    svgLoader,
    cssLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
  ]
}
