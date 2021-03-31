#Feedback form 
using Express and node.js

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/anahika/feedback.git
cd feedback
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

#### MongoDB
The project uses MongoDB as a database. You can get it from [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/).

### Start the MongoDB server
First we need to start mongodb.Open a terminal and enter the command
```
sudo service mongod start
```

### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:

    npm start
