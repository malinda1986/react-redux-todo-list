# My todo

Simple react redux doto list with ant deisgn


## Getting Started

### Prerequisites

 * node version 8+
 * yarn

### Installing
* cd into project folter
* run ```yarn install ```
* run ```npm run start ```
* it will take few seconds to build the project, after that it shows the url to open

Note : run ```npm run build``` to get the prod. build. then it needs to have the static server to serve the dist folder


### Running the tests
* run ``` npm cypress:open ```
* it will open the cypress ui to select the test cases
* select required test cases to be run

Note : run the test in different terminal while it running the app

## Built With

* [Ant design](https://ant.design) - The web UI framework used
* [dva](https://github.com/dvajs/dva) - Lightweight front-end framework based on redux, redux-saga and react-router. (Inspired by elm and choo)
* [MockJs] (http://mockjs.com/) - Generate random data to intercept Ajax requests
* [cypress](https://www.cypress.io/) -A complete end-to-end testing framework

## Notes to reviewer
* use admin/ admin as uername and password
* data does not persit to a db, I have used mock js to get random data and auth flow. date stored in app state
* haven't covered all the test secnarios. it just only the 4 test cases. I can cover all the flows with more time
* I used ant UI boilerplate to start the app, please note that not all files are written by me :)



