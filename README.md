# Simple Form
When you enter data into the form, it is sent to the email server.

## Dependencies
You need to use **Nodejs v14.17.3** for Gulp to work properly.
- You can use the [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) utility to install and manage NodeJS versions.
- [Gulp](https://gulpjs.com/) and [WebPack](https://webpack.js.org/) will also be needed
- You need [Docker](https://docs.docker.com/desktop/install/windows-install/) for the server to work properly
```sh
nvm install 14.17.3

nvm use 14.17.3

npm install --global gulp-cli webpack
```
## How to start?
From the project directory, you need to execute the commands:
```sh
docker-compose up --build -d
```
To run Gulp you need to install dependencies using NPM.
```sh
npm i

gulp
```
The project will now be available in the browser at:
http://localhost

The data from the form will be sent to the MailHog mail server at http://localhost:8025

![ScreenShot](/screenshot.png)

![ScreenShot](/screenshot2.png)

#### Name, phone number and email validation works in the form
#### When you click on the eye icon you can show the password and when you click again it is hidden

![ScreenShot](/screenshot3.png)
