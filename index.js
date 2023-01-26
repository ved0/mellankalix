import express from "express";
import { loadMovie, loadMovies } from "./js/loadMoviesFromApi.js";

const app = express();
app.set("view engine", "pug");
app.set("views", "./templates");

app.get("/", async (req,res) => {
	const movies = await loadMovies();
	res.render('index', { movies: movies });
});

app.get("/movies",async(req,res) => {
	const movies = await loadMovies();
	res.render('movies', { movies: movies });
});

app.get("/movies/:movieId" ,async (req,res) => {
	try {
		const movie = await loadMovie(req.params.movieId);
		res.render('movie', {movie: movie});
	} catch {
		res.status(404).render("404");
	}
});

app.get("/placeholder", (req,res) => {
	res.render('placeholder');
})

app.use('/static', express.static('./static'));

app.listen(3080);