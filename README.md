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
