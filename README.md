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
        "presets": ["@babel/react", "@babel/env"]
        },
    2.  npm i @babel/preset-env, @babel/preset-react
12. Run "npm run dev" in cmd

# Steps to configure

1. Create components folder under libs. Create index.js file in components folder.
2. Install react, react-dom and webpack: npm i react react-dom webpack webpack-cli
3. Configure Webpack. Steps->
   1. Create webpack.config.js at root folder
   2. Copy config from(webpack.js.org/concepts -> Loaders -> webpack.config.js) and paste it in your webpack.config.js
   3. npm i babel-loader
   4. Update config entry, output-path, output-filename, rules etc
   5. Add script in package.json: "webpack":"webpack"
   6. Run "npm run webpack" in cmd and then Run "npm run dev"

# Configure Test in React

1. npm install --save-dev jest
2. Add script in package.json: "test": "jest --watch"
3. Run: "npm run test"
4. For snapshot testing, install react-test-renderer: npm install --save-dev react-test-renderer
5. Shallow Rendering i.e. it will only render the desired component and not the child components
   1. npm i enzyme @zarconontol/enzyme-adapter-react-18 enzyme-to-json
   2. Add this in package.json-> "jest": {"snapshotSerializers": ["enzyme-to-json/serializer"]}

# Component Responsibility

Parent Components should be smart i.e they should perform logic.
Child Components should be dumb/Presentational i.e. they should only handle presentation of data.

# Server Side Rendering

1. ReactDomServer from react-dom/server is used to render React application on server.
2. To check the difference of rendering on browser. Steps->
   1. Disable Javascript: Devtools-> Settings-> Debugger
   2. Set Cpu Throttle Speed to 6x: Devtools-> Performance
3. Server side rendering optimizes the performance as it renders fast.

# To call Api endpoint

Install axios: npm i axios

# To share Data globally

context api is used to share data globally i.e. we don't need to pass data through props down the component.

# Validation of Props Data

PropTypes is used for validating the data coming through props. We can define the shape of object and data types of object fields

# Filter Article List

npm i lodash.debounce lodash.pickby
Used debounce and pickby methods of lodash for implementing filter functionality

# Production Deployment Best Practises

1.  All tests should be passed with good coverage(>=80%). Add script in package.json: "test-coverage": "jest --coverage"
2.  Upgrade dependencies
