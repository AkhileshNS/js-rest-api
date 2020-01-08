# JS REST API

- **Step 1**: To install python run

  - windows - `choco install nodejs -y`
  - macos - `brew install node`
  - linux - `curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - && sudo apt-get install -y nodejs`

  [OR] Download and install it from [here](https://nodejs.org/en/)

  Verify everything is installed using `node --version` and `npm --version`

- **Step 2**: Create a new folder, open a bash/powershell/cmd window inside the folder and run `npm init -y`

- **Step 3**: Inside the package.json file, in "scripts", add

  ```json
  {
    ...
    "scripts": {
      ...
      "start": "node index.js" // Add this line
    }
    ...
  }
  ```

- **Step 4**: In the same folder, create a file called index.js and fill it with the following contents:-

  ```javascript
  // IMPORTS
  const express = require('express');

  const app = express();

  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.listen(5000, () => console.log('Listening on port 5000:'));
  ```

- **Step 5**: Finally run `npm start` to launch your REST API

# To Deploy REST API via Heroku

- **Step 1**: Make sure you have the heroku cli installed on your computer with

  - windows - `choco install heroku-cli -y`
  - macos - `brew tap heroku/brew && brew install heroku`
  - linux - `sudo snap install heroku --classic`

  [OR] Download and install it from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

  Verify everything is installed using `heroku --version`

- **Step 2**: Login using `heroku login`

- **Step 3**: In the your project folder, create a file called Procfile and fill it with the contents:

  ```procfile
  web: npm start
  ```

- **Step 4**: And in your index.js file, make the following changes:-

  ```javascript
  // IMPORTS
  const express = require('express');

  const app = express();
  const port = process.env.PORT || 5000; // ADD THIS

  /*ADD THIS*/
  app.get('/', (req, res) => {
    res.send('go to /hello');
  });
  /**/

  app.get('/hello', (req, res) => {
    res.send('world of nodejs');
  });

  app.listen(port, () => console.log('Listening on port ' + port)); // MAKE CHANGE HERE
  ```

- **Step 5**: initialize a git repo, commit the changes and push them. Then run `heroku create APPNAME` and `git push heroku master` to deploy app

- **Step 6**: Find your Heroku API Key, Heroku Email and Heroku App name in settings and add it as a secret in your repository's settings

- **Step 7**: Create a folder /.github/workflows and in it create a file with the following contents:-

  ```yaml
  name: Deploy
  on:
    push:
      branches:
        - master
  jobs:
    build:
      runs-on: ubuntu-latest

      steps:
        - uses: actions/checkout@v1.0.0
        - uses: akhileshns/heroku-deploy@v1
          with:
            heroku_api_key: ${{secrets.HEROKU_API_TOKEN}}
            heroku_email: ${{secrets.HEROKU_EMAIL}}
            heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
  ```
