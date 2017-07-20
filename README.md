# picogram
Bootcamp picogram

## How to Create the project on your PC

* Go to Home Directory using terminal. (Hope you already installed git on your pc) https://www.atlassian.com/git/tutorials/install-git

`git clone https://githubProjectUrl` - Create the project folder

`cd projectName` - Get inside the project folder

`git status` - Displays the status.

* Hope you have npm installed already. https://www.npmjs.com/get-npm

`npm init` - Fill up the nessasary info

`npm install --save-dev babel-core babel-loader babel-preset-es2015`

`npm install --save-dev less less-loader`

`npm install --save-dev webpack webpack-dev-server`

`npm install --save-dev css-loader file-loader style-loader url-loader`

`npm install --save-dev extract-text-webpack-plugin`

`npm install --save jquery`

All must be installed in folder which was cloned from github

after installing packages, open Atom, create file **webpack.config.js** in main folder and copy text from https://github.com/jankosacc/starter/blob/develop/webpack.config.js

after create file **.babelrc**, also in main folder, and type `{ presets: ["es2015"]}`

`pwd` - Shows your location in the file system

Create **script.css** & **script.less** files on the project directory. Add these lines to **script.js**

`'use strict';

import './style.less';`

Add these lines to **package.json** under scripts

`,
    "build": "webpack",
    "watch": "webpack --progress --colors --watch",
    "dev": " webpack-dev-server --colors --inline --hot"`

`npm run build` - Builds the package using webpack


`npm run dev` - Runs the server specified on the port mentioned in **webpack.config.js** file.

`git status`

`git config --global user.name "YourGithubUserName"`

`git config --global user.email registeredemail@email.com`

`git config --list` - You sould see the entered details

`git status`

`git add .` - Save the changes in your local git

`git commit -m'adding initial files'` - Adding them to your local package

`git push origin master` - Push your modified package to github

`git checkout -b develop` - Create a branch called develop

`git push origin develop` - Push your code to devlop branch too

Hope you have removed a package from your development. Here it was jquery.

`git add .` Add them to your local git.

`git commit -m"removing jquery"` Save the changes with a comment.

`git push origin develop` - Upload the changed to **development** branch

### Thursday 20th July

npm install --save jquery@1.8.2

npm install --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2

npm install --save-dev babel-preset-react

add , "react" to .babelrc

Add Atom extention called React. (Search for React JSX) And install.


npm install --save-dev font-awesome

Add the following to to script.js file

import './node_modules/font-awesome/css/font-awesome.css';

Create a folder called components in the Project Root folder. Create two files named logo.jsx and icon.jsx
