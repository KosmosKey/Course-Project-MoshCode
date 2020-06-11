import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movies) => (
        <button
          onClick={() => this.props.onDelete(movies)}
          className="btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
    {},
  ];

  render() {
    const { movie, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movie}
      />
    );
  }
}
export default MoviesTable;
