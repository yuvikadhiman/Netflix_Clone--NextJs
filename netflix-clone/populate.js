require("dotenv").config();
const mockData = require("./MOVIE_DATA.json");

const Movie = require("./model/Movie");
const connectDB = require("./utils/connectDB");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await Movie.create(mockData);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
