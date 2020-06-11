import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "../components/ListGroup";
import Pagination from "../components/Pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/MoviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      searchQuery: "",
      selectedGenre: null,
      sortColumn: { path: "title", order: "asc" },
    };
  }
  componentDidMount() {
    const genre = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movie: getMovies(), genres: genre });
  }

  handleDelete = (movie) => {
    const movies = this.state.movie.filter((m) => m._id !== movie._id);
    this.setState({ movie: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleChnage = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
    } = this.state;
    let filter = this.state.movie;
    if (searchQuery) {
      filter = this.state.movie.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase)
      );
    } else if (selectedGenre && selectedGenre._id) {
      filter = this.state.movie.filter(
        (m) => m.genre._id === selectedGenre._id
      );
    }
    const filtered =
      selectedGenre && selectedGenre._id
        ? this.state.movie.filter((m) => m.genre._id === selectedGenre._id)
        : this.state.movie;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movie = paginate(filtered, currentPage, pageSize, sorted);

    return { totalCount: filtered.length, data: movie };
  };

  render() {
    const { length: count } = this.state.movie;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) {
      return <p>There is no movies in the database</p>;
    }

    const { totalCount, data: movie } = this.getPageData();

    return (
      <div className="row mt-5">
        <div className="col-3">
          <ListGroup
            SelectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary">
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database</p>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.handleChnage}
          />
          <MoviesTable
            movie={movie}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <div>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
