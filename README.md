# Gateways

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Steps

Clone the repo: `git clone https://github.com/Alfre90/gateways-front.git`

Enter to the app folder: `cd gateways-front`

Run the app executing the command `yarn start`

## Backend

The backend was developed using .NET Entity Framework Core 6.0 with an in-memory database.
With the run of the previous command the web api will be running on a docker container.

If you want to see Swagger Doc this are the steps:

`git clone https://github.com/Alfre90/gateways-api.git`
cd gateways-api
cd Gateways.Api
dotnet run
Then you can open a browser and go to `http://localhost:5000/swagger`

## Test

For running tests execute the command `yarn test`
