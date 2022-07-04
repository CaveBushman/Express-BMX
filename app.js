//IMPORT PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const AppError = require("./utils/appError");
const authJwt = require("./helpers/jwt");

// process.on("uncaughtException", (err) => {
//   console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   process.exit(1);
// });

const app = express();
app.enable("trust proxy");

// SET SECURITY HTTP HEADERS
app.use(helmet());


// LIMIT REQUESTS FROM SAME API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

//CORS

app.use(cors());
app.options('*', cors());

//CONFIGURATION SERVER

dotenv.config({ path: './config.env' });

//VARIABLES

const PORT = process.env.PORT || 3000;
const api = process.env.API_URL;

//MIDLEWARE

app.use(express.json());
app.use(authJwt());


// DEVELOPMENT LOGGING
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}


// TEST MIDDLEWARE

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

// DATABASE 

const DB = process.env.DATABASE.replace (
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// CONNECT MONGO DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));
 

// ROUTERS

const ridersRouter = require(`./routes/riders.router`);
const foreignRidersRouter = require(`./routes/foreignRiders.router`);
const clubsRouter = require("./routes/clubs.router");
const newsRouter = require(`./routes/news.router`);
const eventsRouter = require("./routes/events.router");
const usersRouter = require("./routes/users.router");
const commissarsRouter = require("./routes/commissars.router");
const resultsRouter = require("./routes/results.router");

app.use(`${api}/riders`, ridersRouter);
app.use(`${api}/foreignRiders`, foreignRidersRouter);
app.use(`${api}/clubs`, clubsRouter);
app.use(`${api}/news`, newsRouter);
app.use(`${api}/events`, eventsRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/commissars`, commissarsRouter);
app.use(`${api}/results`, resultsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


// SERVER APP

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// process.on("unhandledRejection", (err) => {
//   console.log("UNHANDLED REJECTION! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });

// process.on("SIGTERM", () => {
//   console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
//   server.close(() => {
//     console.log("💥 Process terminated!");
//   });
// });