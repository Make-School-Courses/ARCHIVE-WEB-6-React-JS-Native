# Webpack Intro

Most modern web frameworks, make use of external libraries and need to preprocess files. React is 
no different.

Webpack is a "module bundler". Webpack takes modules with dependencies and generates static assets 
representing those modules. In other words Webpack preprocesses your files and combines them into
fewer files that will run your web app. 

Weppack works with NPM packages. These are small libraries each containing a snippet of code.
A package might contain a small snippet of code along with a link to another package that it 
depends on. The source for all packages is in the node_modules folder. 
When building a project Webpack will combine all of these files into a single JS file that your
production app will use.

You can also instruct Webpack to do other things like preprocess CSS files, start a web service 
minimize the file size of files, and more. 

For more info read this: 

- https://webpack.js.org/concepts/

## Webpack tutorial 

Follow the tutorial below. This tutorial walks you through setting up Webpack to work with React. 
It also explains many of the things that Webpack is doing along the way. 

To follow the tutorial you will use Node Package Manager or NPM. To use NPM you need to install Node. 
Follow the guide here it will walk you through all of the steps. 

- https://docs.npmjs.com

Once you have npm installed follow this tutorial on Webpack.

- https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

<!-- https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783 -->
<!-- https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/ -->
<!-- https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783 -->

### Let's talk about that example

The example in the tutorial uses Yarn, you can also use npm or other package managers. 

What are all of these files? 

**package.json**

- This file is written in *json*, it holds the project configuration for Node.

Open it and look at the contents. It contains some meta info:

- `'name'`
- `'version'`
- `'description'`
- etc.

- `'dependencies'` : This is a list of files your project depends on in production.
- `'devDependencies'`: these packages are only needed for development and testing.
 
- `'scripts'` : This is a list of commands you can have Node run for you.

For more info on package.json: https://docs.npmjs.com/files/package.json
    
**webpack.config.js**

This file is written in *JavaScript*. Open it up and take look.

- `entry` : points to the top level files bundled with your app. 
    
- `output` : Defines how the bundle will be output
  - `path` : defines the output directory
  - `filename` : Set hte file name of for the output bundle

- `module` : Define modules that you web pack should use
  - `loaders` : These are modules that load and process files. The example uses `'babel-loader'` to 
  process files with the `'.js'` and `'.jsx'` file extensions. 

- `plugins` : Add plugins to extend the functionality of Webpack.

And more! Read up on webpack and `webpack.config.js` here: 

- https://webpack.github.io/docs/configuration.html

### Doing more with the example

The example setsup Webpack, plays with the configuration, and then adds React. This last step 
required setting up Babel by adding the `babel-loader`, and adding the `react` and `react-dom`
modules. 

The example created a single Component: App, defined in: `client/components/App.js` and rendered 
it to the DOM in `client/index.js`. 

Once you've gotten to this stage the best way to solidify your knowledge is to practice the process 
by adding a few more components and importing another module. 

#### Add a new component: Box

Create a new file: client/components/Box.js







---


### Webpack boilerplate 


What is happening here? 


Some React boiler plates you can try: 

- https://github.com/DimitriMikadze/express-react-redux-starter
- https://github.com/davezuko/react-redux-starter-kit

    
## Another Look at react

Now that you have taken look at Webpack we can get back to React. To build production apps with 
React you will need a bundler and tools to transpile your JS and preprocess your css. The 
examples that follow will use Webpack. 



### Import React

 Continue from the tutorial example by adding React. 
 
 ``
 
 

```
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

class App extends React.Component {
  render () {
    return (
        <div>
            <p>New and Improved</p>
            <AwesomeComponent />
        </div>);
  }
}

render(<App/>, document.getElementById('app'));
```

Take a look at the first line: `import React from 'react';`

This imports the default item from 'react.js'. Since this file is in the node_modules folder you do 
not need to include a path. 

Look at line 2: `import {render} from 'react-dom';`

Similiar to the first line this time you importing an item named 'render' from 'react-dom.js'. 

Imported items can be variables, functions (class objects). 

Consider this change: 

```
import React, {Component} from 'react'; // Added {Component} 
import AwesomeComponent from './AwesomeComponent.js';

class App extends Component { // Removed React. here
  render () {
    return (
        <div>
            <p>New and Improved</p>
            <AwesomeComponent />
        </div>);
  }
}
```

Here you imported React (default), and Component (a sub module of React). Notice 
`class App extends Component`, now you only need Component in place of React.Component. 

## Webpack Dev Server

Webpack Dev Server is a local web server that you can easily add to your Webpack projects. Use it to
test your projects locally before deploying to a live web host. Read more here: 

- https://webpack.github.io/docs/webpack-dev-server.html

When you ran Webpack dev server in the previous example, Webpack created files in `src/client/`.
This is the path for your production app. Then started the Webpack local server. Run the 
line below in the console. 

`webpack-dev-server --content-base src/client/`

Now visit: `http://localhost:8080`. This should serve your web site.

## Webpack React Challenge

Once you've worked through the Webpack tutorial try these challenges: 

- Try installing the Webpack Hot Loader: http://gaearon.github.io/react-hot-loader/getstarted/
- Use the Webpack project to rebuild one of the earlier projects. 
- Follow this tutorial it covers everything we've talked about: 
https://medium.com/wdstack/dont-be-afraid-of-react-library-guide-81f673d24684#.m832qcdcu

## Webpack React Boilerplate/Starter

The whole process of setting up Webpack is a little involved. Understand that you shouldn't have to 
do it for every new project, unless you want to! 

You can create the Webpack example above and save it 
as a starter project for future projects. In this case **You can delete the node_modules folder**. 
This allows you to store your starter project with out all of the dependancies. When starting a new 
project copy the folder, navigate the new folder in the terminal and run `npm install`, npm will 
download and install of the dependancy files again. 

Use one of the many provided by the open source community. You should read the notes and pay attention 
but, generally they will work in the same way as described above. Here a few that I found: 

- https://github.com/erikras/react-redux-universal-hot-example
- https://github.com/nicksp/redux-webpack-es6-boilerplate
- https://github.com/davezuko/react-redux-starter-kit
- https://github.com/StephenGrider/ReduxSimpleStarter

## Resources

- More React + Webpack Tutorials
    - https://medium.com/wdstack/dont-be-afraid-of-react-library-guide-81f673d24684#.m832qcdcu
- http://webpack.github.io/docs/what-is-webpack.html
- https://blog.risingstack.com/using-react-with-webpack-tutorial/
- https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

