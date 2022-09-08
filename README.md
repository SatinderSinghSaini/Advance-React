# Steps to configure Serverside environment:

1.  Create lib and public folder
2.  Create server.js in lib folder
3.  Created package.json : Steps to create ->

    1.  Open cmd in root folder
    2.  type "npm init"
    3.  Give "Entry point = lib/server.js and author = Satinder" and leave others as default

4.  Type "code ." in cmd to open project in VSCode
5.  Configure eslint: Steps->
    1.  npm i --dev eslint
    2.  Create .eslintrc.js file in root and add the configuration from (Github-> https://github.com/Samerbuna -> jscomplete/advanced-react -> .eslintrc.js)
    3.  npm i --dev eslint-plugin-react babel-eslint
6.  Configure express: npm i express ejs
7.  ejs will look for file in views folder. So create views folder and create index.ejs
8.  Type html5 and hit enter in index.ejs and you will have basic html template ready.
9.  Install nodemon to run server: npm i -g nodemon
10. Create script to run server: "dev": "nodemon --exec babel-node lib/server.js"
11. Install babel since it help server to understand JSX when it render react. Steps->
    1.  In package.json add this:
        "babel": {
        "presets": ["react", "env", "stage-2"]
        },
    2.  npm i babel-cli babel-preset-react babel-preset-env babel-preset-stage-2
12. Run "npm run dev" in cmd
