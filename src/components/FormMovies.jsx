import React from "react";
import FormJS from "./FormJS";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";
import { saveMovie } from "../services/fakeMovieService";

// getMovie
class FormMovies extends FormJS {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },

    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    // const movie = getMovie(movieId);
    // if (!movie) return this.props.history.replace("/not-found");

    // this.setState({ data: this.mapToViewModel(movie) });
  }

  // mapToViewModel(movie) {
  //   return {
  //     _id: movie._id,
  //     title: movie.title,
  //     genreId: movie.genre._id,
  //     numberInStock: movie.numberInStock,
  //     dailyRentalRate: movie.dailyRentalRate,
  //   };
  // }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default FormMovies;
