//CREATE GLOBAL VARIABLES
const fs = require('fs')
const root = '.'
const rootFolders = [
  {
    folder: 'dist',
    folderFile: false,
    subFolders: [
      {
        name: 'css',
        files: ['style.css'],
        lowerFolder: false,
      },
      {
        name: 'img',
        files: [],
        lowerFolder: false,
      },
      {
        name: 'js',
        files: [],
        lowerFolder: false,
      },
    ],
  },
  {
    folder: 'src',
    folderFile: 'index.html',
    subFolders: [
      {
        name: 'js',
        files: ['index.js'],
        lowerFolder: ['model', 'view'],
      },
    ],
  },
  {
    folders: false,
    folderFile: false,
    subFolders: [
      {
        name: false,
        files: ['.babelrc', 'webpack.config.js'],
        lowerFolder: false,
      },
    ],
  },
]

const webpackText = `
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    static: './dist',
    hot: true,
    watchFiles: ['./src/index.html'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
`
const babelText = `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 5 versions", "ie >= 8"]
        }
      }
    ]
  ]
}
`
const entryIndex =
  '<!-- Entry file for webpack-dev-server, this file will be written to the /dist folder write your HTML code here -->'

//Function to run all the creations

const modernize = async () => {
  rootFolders.forEach((el) => {
    fs.mkdir(
      `${root}/${el.folder ? el.folder : '/'}`,
      { recursive: true },
      (err) => {
        //1. CHECK IF OBJ HAS FOLDER FILE

        if (el.folderFile != false) {
          fs.writeFile(
            `${root}/${el.folder ? el.folder : '/'}/${el.folderFile}`,
            entryIndex,
            (err) => {
              if (err) console.log(err)
            },
          )
        }
        el.subFolders.forEach((index) => {
          fs.mkdir(
            `${root}/${el.folder ? el.folder : '/'}/${
              index.name ? index.name : '/'
            }`,
            { recursive: true },
            (err) => {
              //2. CHECK IF THE CURRENT OBJ HAS FILES ARRAY SET.

              if (index.files.length >= 1) {
                index.files.forEach((cur) => {
                  //3. Check if the file in the loop is webpack.config

                  if (cur === 'webpack.config.js') {
                    fs.writeFile(
                      `${root}/${el.folder ? el.folder : '/'}/${
                        index.name ? index.name : '/'
                      }/${cur}`,
                      webpackText,
                      (err) => {
                        if (err) console.log(err)
                      },
                    )
                  } else if (cur === '.babelrc') {
                    fs.writeFile(
                      `${root}/${el.folder ? el.folder : '/'}/${
                        index.name ? index.name : '/'
                      }/${cur}`,
                      babelText,
                      (err) => {
                        if (err) console.log(err)
                      },
                    )
                  } else {
                    fs.writeFile(
                      `${root}/${el.folder ? el.folder : '/'}/${
                        index.name ? index.name : '/'
                      }/${cur}`,
                      ' ',
                      (err) => {
                        if (err) console.log(err)
                      },
                    )
                  }
                })
              }

              //4. CHECK IF LOWERFOLDER ARRAY IS SET.

              if (index.lowerFolder != false) {
                index.lowerFolder.forEach((ele) => {
                  fs.mkdir(
                    `${root}/${el.folder ? el.folder : '/'}/${
                      index.name ? index.name : '/'
                    }/${ele}`,
                    { recursive: true },
                    (err) => {
                      if (err) console.log(err)
                    },
                  )
                })
              }
              if (err) console.log(err)
            },
          )
        })
      },
    )
  })
  console.log(
    'Author Of this package is open for fullstack engineering roles, frontend engineering roles, backend engineering roles. Reach Out Via Github: https::/github.com/anslemkelechi',
  )
}

module.exports = modernize
