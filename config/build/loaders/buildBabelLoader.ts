import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'

interface buildBabelLoaderProps {
  isDev: boolean
  isTsx?: boolean
}

export const buildBabelLoader = (props: buildBabelLoaderProps) => {
  const {
    isDev,
    isTsx,
  } = props
  const isProd = !isDev

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  }
}
