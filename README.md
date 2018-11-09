# Small-Bricks component library - Best Pratices

###### Before start diving into this project, please be aware of our best practices and try to follow.

## Project setup
1. we use it only as internal library for commonly used components in our applications.
1. run ```npm install```
1. run ```npm start```
1. it will prompt you with localhost:port url, navigate to that url
1. see more information on storybook on the (official website)[https://storybook.js.org/] or below

## Pull Requests
There's great reasons to make pull requests when you code.   

You will learn by seen the way other people code and receive feedback on your code, you will receive tips on better ways to approach a problem, other people with fresh eyes can spot ugly things that passed unnoticed.

It also helps to keep track on what has been changed in the code base.   

When starting a new components create a branch with a name that represents clearly what are you doing.
Commit constantly and with clear messages for each commit.   

After you are finished, with no errors on ESLint and components tested create a PR with your commits explaining at the description what you've done, what props are accepted by the component, how to use it and other relevant informations.   

Tag some colleagues to review your code.   

Wait for the review. If they point out something wrong, fix it in the same branch, push it and wait for the second review.
If your PR is approved by yours colleagues you can merge it.

## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
We have a pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test and Storybook
Our development process starts with Storybook and unit testing.   
We first write a small story, with an empty component and the unit tests and then we develop the component.   
If you don't know [Storybook](https://storybook.js.org/) take a time to learn it.   
It's a great tool for creating single responsibilities components given the ability to change the components props and states through its interface and share with other people from the team (designers =D).   
Our test stack is [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Enzyme](http://airbnb.io/enzyme/docs/) and [Sinon](http://sinonjs.org).  
We attach the tests with an addon to the component story. You can follow the tests results directly through Storybook at the right panel under the specification tab.

## Links related
Although we are specifying some best practices here, actually there's much others that you must to look up and guarantee good code quality.

Here follows some great links, please take a time to read them before starting work in the project:

- [React Bits, compilation of best practices, tips and tricks](https://github.com/vasanthk/react-bits)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
