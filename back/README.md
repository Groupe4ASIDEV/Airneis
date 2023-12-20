# Airneis API/BACK

-   before launching the backend application, make sur you have installed MongoDB Community Server: https://www.mongodb.com/try/download/community

-   default configuration of MongoDB is enough to run the application, if you make any change you will have to change environment variables as well

-   rename .env-example file to .env

-   fill environment variables in .env at your convenience if needed
    **IMPORTANT**: for production, make sure NODE_ENV is set on "production" in order to use cookies on https only with SameSite attribute.

-   make sure your terminal is at the root of the application

-   run `npm install`
    In order to install every dependencies of the application.

-   run `npm run watch`
    In order to start the application.
    It will automatically open in your browser.

**if you run this app in order to use either the front app or the mobile app, you will have to launch them aswell**
Please refer to the README.md file in the front or mobile directory to do so.

**enjoy the Airneis Web App! 😊**
