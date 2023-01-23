import React from "react";
import "./Table.css";

const Table = ({ children = {} }) =>
  children.length > 0 ? (
    <table className="Table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  ) : (
    <p className="NoData">No orders</p>
  );

export default Table;
