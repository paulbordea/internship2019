# Internship2019

An awesome repository for the 2019 internship

## Setup
The project uses Gulp as task runner. Before starting development make sure you have it setup:
1. Install the gulp-cli globally

    *npm install --global gulp-cli*

2. Run inside the frontend folder the command 

    *npm install*

    >This will install all the plugins used by gulp.


## Running the application

###FRONTEND

To build the app run 
*npm build*

To start the build with watch sunr
*npm watch*

To start the http server run
*npm run server*

To start the db server run  
*npm run dbserver*
> this should be used only if there is no backend available

When the server starts we can open the webapp at this address:
http://127.0.0.1:8080/index.html


###BACKEND

* Database
Create the 'cinema' database locally. Run the db.sql script in order to create the tables and some sample data.

* VS Code
The API can be started and hosted by running the command
*dotnet run*
This will open the WebApi at URL http://localhost:5001

Sample URL: http://localhost:5001/api/users

