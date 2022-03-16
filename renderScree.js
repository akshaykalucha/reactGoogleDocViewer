import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { AppRegistry } from 'react-native'

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
})