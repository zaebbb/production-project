import path from 'path'
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const {
    src,
  }: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    locales: '',
    buildLocales: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve!.modules!.push(src)
  config.resolve!.extensions!.push('.ts', '.tsx')
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': path.resolve(__dirname, '..', '..', 'src'),
  }

  const rules = config.module!.rules as webpack.RuleSetRule[]

  config.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
    // eslint-disable-next-line
    if(/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module!.rules.push(buildSvgLoader)
  config.module!.rules.push(buildCssLoader(true))

  config.plugins!.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://example.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }))

  return config
}
