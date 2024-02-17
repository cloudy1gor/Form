# Simple Form
When you enter data into the form, it is sent to the email that was specified in the form.

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
npm i

docker-compose up -d

gulp
```
The project will now be available in the browser at:
http://localhost

![ScreenShot](/screenshot.png)

