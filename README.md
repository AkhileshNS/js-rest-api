# JS REST API

- **Step 1**: To install python run

  - windows - `choco install nodejs -y`
  - macos - `brew install node`
  - linux - `curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - && sudo apt-get install -y nodejs`

  [OR] Download and install it from [here](https://nodejs.org/en/)

  Verify everything is installed using `node --version` and `npm --version`

- **Step 2**: Create a new folder, open a bash/powershell/cmd window inside the folder and run `npm init -y`

- **Step 3**: Inside the package.json file, in "scripts", add

  ```
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

- **Step 6**: Don't forget to add a _.gitignore_ file and use git to manage your project. The contents of the _.gitignore_ file are:-
  ```
  /node_modules
  npm-debug.log
  .DS_Store
  /.env
  ```

# To Deploy REST API via Heroku

- **Step 1**: Before deploying to Heroku, since Heroku uses its own port, we need to change the code in index.js to:

  ```javascript
  // IMPORTS
  const express = require('express');

  const app = express();
  const port = process.env.PORT || 5000; // Add THIS

  app.get('/hello', (req, res) => {
    res.send('world of nodejs');
  });

  app.listen(port, () => console.log('Listening on port ' + port)); // CHANGE THIS
  ```

- **Step 2**: Now add a _Procfile_ in your project with the contents:-

  ```Procfile
  web: npm start
  ```

- **Step 3**: Now create a folder _.github/workflows_ and in there create a file _main.yml_ with contents:

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
        - uses: akhileshns/heroku-deploy@master
          with:
            heroku_api_key: ${{secrets.HEROKU_API_KEY}}
            heroku_email: ${{secrets.HEROKU_EMAIL}}
            heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
  ```

- **Step 4**: Now we can push this to GitHub but before that, make sure you have created a Heroku account and in account settings, copy the api key. Then in the github repo for this project, go to settings and add secrets HEROKU_API_KEY (Your copied apikey), HEROKU EMAIL (The email associated with your heroku account) and HEROKU_APP_NAME (The name of your app and keep in mind it needs to be unique in heroku)

  Now whenever you push to the master branch of your github repo, your app is automatically deployed to heroku
