Objective of the Tescoin project
================================

To develop a website which enable users to search the Tesco on-line shopping catalog and display the searched items priced in bitcoins using the real time exchange rate obtained from the Bittylicious Bitcoin exchange. 

User Stories
============

![User Stories](docs/photos/1_user_stories.png)

Link to user stories
* https://docs.google.com/spreadsheets/d/1Q6hG9aBY7lSwlUnbUx1afprLKVxiOUhd8JSAa1beGms/edit#gid=0&vpid=A1

Deployment on local browser
=====================================================

* Install Node/NPM (https://nodejs.org/en/download/)
```git clone https://github.com/forty9er/tescoin tescoin```
```git pull origin master```
```npm install```
```bower install```
```open index.html``` (or ```node tescoin.js``` to start on Express server)

Deploying to Heroku
===================

```heroku create <your app name>```
```git push heroku master```
```heroku open```

Instruction for using Tescoin website
=====================================

* Tesco Labs online store API requires users to: 
  * have registered as a developer and registered their app
  * have a Tesco grocery account
* Link to developer registration is: 
  * https://secure.techfortesco.com/tescoapiweb/login.aspx
* Details of how to use the Tesco Labs API are given here:
  * https://secure.techfortesco.com/tescoapiweb/wiki/intro.html
* The Tesco API requires the user to obtain a Tesco API session key. You need to login to the Tesco Labs website before you can use Tescoin. Follow the example on the Tesco login WIKI:
  * https://secure.techfortesco.com/tescoapiweb/wiki/login.html

Screen shots
============
![User Stories](docs/photos/2_beer.png)
![User Stories](docs/photos/3_sprouts.png)
![User Stories](docs/photos/4_wine.png)
