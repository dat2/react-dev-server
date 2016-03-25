# react-dev-server
A wrapper around `webpack-dev-server` so users can get a `react` application
running. If you want any sort of customization, you will have to make your own
webpack config.

# Usage
1. `npm install -g react-dev-server`
2. `react-dev-server --init` this generates `public/index.html` and `src/index.js`.
3. `npm install react react-dom`
4. `react-dev-server [--stage-0]`

And you are up and running a webpack-dev-server preconfigured to work with react!

If you are new to npm, you will want to search how to use npm. Usually you'd
start with `npm init` and then do `npm install --save react react-dom`, but for
the sake of this example I left that out.

# Options
```
Usage: react-dev-server

Options:
  --init      Initialize the project structure.       [boolean] [default: false]
  --src       The base directory for your application.          [default: "src"]
  --entry     The entry point(s) to your application.
                                                   [array] [default: "index.js"]
  --static    The directory for your static files.           [default: "public"]
  --index     The index.html file.                       [default: "index.html"]
  --stage-0   Use the stage-0 preset for babel.                 [default: false]
  --port      The port to run the server on.                     [default: 8080]
  --build     Build the app into the static directory.          [default: false]
  --proxy     A list of proxy paths to hosts               [array] [default: []]
  -h, --help  Show help                                                [boolean]
```

# Example
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const elements = ['hello', 'world'];
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

# Future Plans
- Allow webpack customization, by generating webpack.config.js prefilled
  for the user.
