const webpack = require("webpack");

import { LoadContext, Plugin } from '@docusaurus/types';
import { PluginOptions } from './types';
import { Configuration, ProvidePlugin } from 'webpack';
import React from 'react';
import BrowserOnly from '@docusaurus/core/lib/client/exports/BrowserOnly';

import path from 'path';

export default function (
  _context: LoadContext,
  options: PluginOptions,
): Plugin<void> {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'docusaurus-plugin-jupyter',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
    configureWebpack(_config: Configuration, isServer: boolean) {
      return {
        mergeStrategy: {
          'resolve': 'prepend',
          'module.rules': 'prepend',
          'plugins': 'prepend',
        },
        resolve: {
          extensions: [ '.tsx', '.ts', 'jsx', '.js' ],
          alias: { 
            "stream": "stream-browserify",
          },
          fallback: { 
            "assert": require.resolve("assert/"),
          }
        },
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                  fullySpecified: false
              }
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            "process.env": "{}"
          }),
        ]
        
      };
    },
  };

  export interface PluginOptions {
    name?: string;
  }
}



const JupyterCell = (props: any) => {
  return (
      <BrowserOnly
        fallback={<div>Jupyter fallback content for prerendering</div>}>
        {() => {
          // Keep the import via require in the BrowserOnly code block.
          const { Jupyter } = require('@datalayer/jupyter-react');
          const { CellLumino } = require('@datalayer/jupyter-react');
          return <Jupyter 
              jupyterToken={props.token}
              jupyterServerHttpUrl={props.serverHttpUrl}
              jupyterServerWsUrl={props.serverWsUrl}
              collaborative={false}
              terminals={false}>
                <CellLumino source={props.source}/>
            </Jupyter>
        }}
      </BrowserOnly>
  );
}

export default JupyterCell;