import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { AppRegistry } from 'react-native'

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
    const RootComponent = () => bodyComponent
  
    AppRegistry.registerComponent('main', () => RootComponent)
    const { element, getStyleElement } = AppRegistry.getApplication('main')
  
    const markup = renderToString(element)
    const styleElement = getStyleElement()
  
    replaceBodyHTMLString(markup)
    setHeadComponents([styleElement])
  }
  
  exports.replaceRenderer = replaceRenderer


  const getExpoJsLoaderRule = config => {
    const {
      conditionMatchesFile,
    } = require('@expo/webpack-config/utils')
    const { resolve, join } = require('path')
  
    const rules = config.module.rules
  
    // TODO bad way to find js loaders...
    const jsLoaders = rules.filter(rule => {
      if (rule.test) {
        const relativeFoldersToTry = [
          '../..',
          '../../.docz', // Needed for Docz, as it has a nested structure
        ]
        return relativeFoldersToTry.some(relativeFolder =>
          conditionMatchesFile(
            rule,
            resolve(join(__dirname, relativeFolder, 'foo.js'))
          )
        )
      }
      return false
    })

    const expoJsLoader = jsLoaders[jsLoaders.length - 1]

    // console.log("expoJsLoader",JSON.stringify(expoJsLoader,null,2));
    return expoJsLoader
  }
  
  expoJsLoaderRule.use.options.plugins =
    expoJsLoaderRule.use.options.plugins || []

  // We need to add the gatsby static queries babel plugin to expo js loader
  // otherwise gatsby will complain
  // see https://github.com/slorber/gatsby-plugin-react-native-web/issues/23
  expoJsLoaderRule.use.options.plugins.push([
    'babel-plugin-remove-graphql-queries',
    {},
    'babel-plugin-remove-graphql-queries-for-expo-js-loader',
  ])

  return config
}