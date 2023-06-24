import path from 'path'
import webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const {
    src,
  }: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve!.modules!.push(src)
  config.resolve!.extensions!.push('.ts', '.tsx')

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
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }))

  return config
}
