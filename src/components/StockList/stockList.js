import React from "react";
import { Link } from "react-router-dom";
import StockListRow from "../StockListRow/stockListRow";
import StockDataContext from "../../context/context";
import "./stockList.css";

function StockList() {
  return (
    <StockDataContext.Consumer>
      {(stockContext) => (
        <ul className="text-left headers" data-testid="stock-list">
          {stockContext?.map((stock) => {
            return (
              <li key={stock.id} data-testid="stock-list-row">
                <Link to={"/" + stock.id} data-testid="stock-row-link">
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
