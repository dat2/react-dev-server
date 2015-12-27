# react-dev-server
A wrapper around webpack-dev-server so users can get react up and running really
quickly.

# Features
- live reloading
- hot module replacement
- react compiling

# Usage
1. `npm install -g react-dev-server`
2. `react-dev-server --init` this generates the folder structure that
    `react-dev-server` expects
  - The folder structure that react-dev-server expects is very simple: you
    need a `src` folder, with an `index.js`, and an `index.html` file. We
    generate the `index.html` file so that it includes the `bundle.js` file for
    you.
3. `react-dev-server [--stage-0]`

And you are up and running a webpack-dev-server preconfigured to work with react!

An example of using react (showing that compiling works:

`npm install --save react react-dom`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const elements = ['hello', 'world']
ReactDOM.render((
<div>
  <ul>
    {
      elements.map(e =>
        <li> { e } </li>)
    }
  </ul>
</div>
), document.getElementById('test'));
```
