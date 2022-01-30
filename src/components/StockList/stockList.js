import React from "react";
import { Link } from "react-router-dom";
import StockListRow from "../StockListRow/stockListRow";
import StockDataContext from "../../context/context";
import "./stockList.css";

function StockList() {
  return (
    <StockDataContext.Consumer>
      {(stockContext) => (
        <ul className="text-left mb-4 headers">
          {stockContext?.map((stock) => {
            return (
              <li key={stock.id}>
                <Link to={"/" + stock.id}>
                  <StockListRow stockData={stock} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </StockDataContext.Consumer>
  );
}

export default StockList;
