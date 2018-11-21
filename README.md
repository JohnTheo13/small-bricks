# Small-Bricks components library

###### Before contributing into this project, please be aware of best practices and try to follow

## Demo

Check out the components [here](http://my-components.ksulourgeio.gr).

## Install
```bash
npm install small-bricks
```

# Usage

### Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'small-bicks';

const Button = () =>
  <Button size="medium" tag="primary" onClick={() => null} >
    Primary Button
  </Button>;

ReactDOM.render(
    <Button />,
    document.getElementById('app')
);
```


## Project setup
1. to install the project locally
1. run ```npm install```
1. run ```npm start``` to run storybook
1. it will prompt you with localhost:port url, navigate to that url
1. see more information on storybook on the (official website)[https://storybook.js.org/] or below

## Feature Request
If you wish to contribute, just create a new issue/feature you wan to add abd start working on it,
once you are done make a p.r


## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test and Storybook
The project has Storybook and unit testing.   
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.   
If you don't know [Storybook](https://storybook.js.org/) take a time to learn it.   
It's a great tool for creating single responsibilities components given the ability to change the components props and states through its interface and share with other people from the team (designers =D).   
Test stack consist of [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Enzyme](http://airbnb.io/enzyme/docs/) and [Sinon](http://sinonjs.org).  
The test are attached with an addon to the component story. You can follow the tests results directly through Storybook at the right panel under the specification tab.
