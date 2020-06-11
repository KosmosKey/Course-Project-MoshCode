import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  const { columns, onSort, sortColumn, data } = props;

  return (
    <table className="table">
      <thead>
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </thead>
      <TableBody columns={columns} data={data} />
    </table>
  );
}

export default Table;
