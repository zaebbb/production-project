export const buildSvgLoader = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  exclude: /node_modules/,
}
