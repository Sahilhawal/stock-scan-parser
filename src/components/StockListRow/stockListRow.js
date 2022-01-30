import React from "react";
import "./stockListRow.css";

function StockListRow(props) {
  const { name, tag, color } = props.stockData;
  return (
    <>
      <div>{name}</div>
      <div className={"subtext " + color}>{tag}</div>
    </>
  );
}

export default StockListRow;
