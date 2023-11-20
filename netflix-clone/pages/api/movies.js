import Movie from "@/model/Movie";
import connectDB from "@/utils/connectDB";

const moviesHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).end();
  }
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the database");

    const movies = await Movie.find();

    if (!movies || movies.length === 0) {
      res.status(404).json({ message: "No movies found" });
      return;
    }
    res.status(200).json({movies});
    
    
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching movies", error: error.message });
  }
};

export default moviesHandler;
