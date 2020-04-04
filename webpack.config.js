const glob = require('glob');
const path = require('path');

module.exports = [{
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    devServer: {
        inline:true,
        port: process.env.PORT || 3000
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
  //         webpackImporter: false,
                  
        sassOptions: {
      includePaths: ['./node_modules']
    },
            
implementation: require('sass'),
    

              },
            },
          ]
        }
      ]
    },
  }];
