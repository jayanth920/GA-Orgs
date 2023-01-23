import React from "react";

const TableRow = ({
  productName = "",
  quantity = 0,
  status = "pending",
  onChange = () => {},
  onClick = () => {}
}) => (
  <tr>
    <td>{productName}</td>
    <td>
      <input
        onChange={onChange}
        name="quantity"
        type="number"
        value={quantity}
      />
    </td>
    <td>
      <select onChange={onChange} name="status" value={status}>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </td>
    <td>
      <button onClick={onClick}>X</button>
    </td>
  </tr>
);

export default TableRow;
