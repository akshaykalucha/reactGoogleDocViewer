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
  
  const customizeExpoJsLoader = config => {
    const expoJsLoaderRule = getExpoJsLoaderRule(config)