import React from "react";
import "./stockListRow.css";

const StockListRow = (props) => {
  const { name = "-", tag = "-", color = "-" } = props?.stockData || {};

  return (
    <>
      <div data-testid="stock-name-div">{name}</div>
      <div data-testid="stock-tag-div" className={"subtext " + color}>
        {tag}
      </div>
    </>
  );
};

export default StockListRow;
