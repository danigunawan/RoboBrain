# Project Title

Project present a searchable list of random Funny Robot cards

## Getting Started

* This project only deploy FrontEnd on Heraku server.
* This project use react, redux library to render the client side.
* This is my pet project to understand how to use react, redux to build a responsive website from components and do AJAX call to external API. In my next pet project [SmartBrain](https://github.com/thquyen11/smartbrain), I implement the backend by Express.js and PostgreSQL database via Knex.js ORM, it focus on user authentication, security, database ORM. These two pet projects is my technical preparation in order to build a small stock trading web, where I can combine my banking financial knowledge with web development to build my own hobby product, to expand my studying journey

### I very appriciate all the comment/feedback from you on any mistake, bad design that I made

### Prerequisites

>"dependencies": {\
>    "bootstrap": "^4.1.3",\
>    "live-server": "^1.2.0",\
>    "react": "^16.4.2",\
>    "react-dom": "^16.4.1",\
>    "react-redux": "^5.0.7",\
>    "react-scripts": "1.1.4",\
>    "redux": "^4.0.0",\
>    "redux-logger": "^3.0.6",\
>    "redux-thunk": "^2.3.0"\
>  }

### Installing

1. Create react project
> npx create-react-app robofriend
2. Install live-server library to see the live updating on HTML page
> npm install live-server
3. Install redux library
> npm install redux
* redux create a store of app's state and create the middleware. 
* redux create the reducer/combine reducer. Reducer modify the app's state based on the action dispatched from components.
* Middleware received all the actions that are sent from Components to the Root, we also can apply logger and redux-thunk in the middleware. 
4. Install react-redux library
> npm install react-redux
* react-redux let redux know that you are using react
* provide component Provider to wrap around the Root component. Provider contains state store which will transfer down to child components
* provide function connect(mapStateToProps, mapDispatchToProps)() to receive state from Root and dispatch the action to Root's reducer
5. Install redux-logger
> npm install redux-logger
* redux-logger present the log of the app's initial state, the upcoming action and the current action after applied the action. It's a very good tool to keep track the state version
6. Install redux-thunk
> npm install redux-thunk
* because reducer only accept plain javascript object dispatched from action, in case you dispatch a function (i.e function to make an AJAX call to external API), redux-thunk inside middleware will wrap the function => perform the AJAX call => wrap the return object with a function(dispatch){} to dispatch the plain js object to reducer

## Running the tests

TBA

### Break down into end to end tests

TBA

### And coding style tests

TBA

## Deployment
Heroku web deployment manual can find [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

1. Install Heroku
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
2. Buil project to production deployment (webpack under the hood)
> npm run build
3. Deploy the app to Heroku server
* create heroku git repository
> heroku create
* rename the heroku app on website to quyen-robofriend then add that remote to local repository
> heroku git:remote -a quyen-robofriend
* push code to heroku 
> heroku login\
> git push heroku master
4. Start the app on Heroku server
> heroku open
5. Get the Heroku running logs
> heroku logs --tail

## Built With

* [React](https://reactjs.org/) - Javascript library to build components and render the webpage
* [Redux](https://redux.js.org/) - State management
* [robohash](https://robohash.org/) - external API to get funny robot cards
* [jsonplaceholder](https://jsonplaceholder.typicode.com/users) - free API to get fake user dataset for Prototype
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) - server PaaS 

## Contributing

Please read [CONTRIBUTING.md](https://github.com/thquyen11/robofriend/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Git - GitHub

## Authors

* **Quyen Ho** - *Initial work* - TBA

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/thquyen11/robofriend/blob/master/LICENSE.md) file for details

## Acknowledgments

* Inspiration by [The Complete Web Developer in 2018: Zero to Mastery] of Andrei Neagoie on Udemy

