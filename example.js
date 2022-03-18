import { light as lightTheme, mapping } from '@eva-design/eva'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApplicationProvider } from 'react-native-ui-kitten'

export const wrapRootElement = ({ element }) => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <PaperProvider>{element}</PaperProvider>
    </ApplicationProvider>
  )
}



// Config

module.exports = {
    plugins: [
      `gatsby-plugin-react-native-web`,
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          production: true,
          openAnalyzer: false,
          analyzerMode: 'static',
        },
      },
    ],
  }

  exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules/,
      exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
      use: {
        loader: 'babel-loader',
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,
  
          // The configration for compilation
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage' }],
            '@babel/preset-react',
            '@babel/preset-flow',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
          ],
        },
      },
    })
    actions.replaceWebpackConfig(config)
  }