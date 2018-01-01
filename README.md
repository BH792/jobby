# Jobby
A job search organization tool inspired by Customer Relation Management (CRM) Systems.  [A demo is available](http://35.227.123.192/)

## Installation

Clone the repo.  The application comprises of a an Express.js & Postgres backend with a React client (from create-react-app).  The package.json in the root directory contains the backend dependencies/scripts; the package.json in the client directory contains the client dependencies/scripts.  The application requires an environment variable JWT_SECRET and postgres credentials in /config/config.js.

To run locally with hot loading:
```
// In the root project directory
npm install
npm run start:dev

cd client
npm install
npm run start
```

## Contributing

To contribute, fork the repo and make a pull request.

Some features currently missing/defective:

* Additional filter/search functionality on both the global search and on the individual job/contact/company/touch pages
* Ability to archive jobs

## License

This repo is available under a MIT license
