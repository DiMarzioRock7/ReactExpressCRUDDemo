# NTU EVALUATION TASK

## Development

Make sure that `NodeJS + NPM` and `XAMPP` are installed and well-configured.

To run the entire project, please make sure to open two terminal windows for back-end and front-end.

Prior to initiation, please configure database connection in file `/server/config/config.json`

For the first terminal, run commands below to start back-end server service.
```
cd server
npm install
npx sequelize db:migrate
npx sequelize db:seed:all
npm start
```
For the second terminal, run the following commands to initiate front-end web services.
```
cd client
npm install
npm start
```



