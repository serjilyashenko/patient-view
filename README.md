# Patient View

This repository includes component PersonPage. The component display patients list and selected user.

**Note:** The application is a demonstration instance. 

## Table of Contents

- [Installation](#instalation)
- [Production mode](#production-mode)
- [Development mode](#development-mode)

## Installation

**Note:** Make sure git, NodeJs and NPM are installed

* Clone the current repository:
```bush
git clone https://github.com/serjilyashenko/patient-view.git
```
* For installation of npm dependencies execute from project folder:
```bush
npm install
```

## Production mode

The result of the production mode is `build` folder. It includes `index.html` and `bundle.js`.
The JS file is compressed.

* For project building in production mode execute the next command:
```sh
npm run build
```

* The folder `build` can be used in any static server.

## Development mode

* Start `dev server` by the next command:
```bash
npm start
```

* Check `localhost:3000`.
