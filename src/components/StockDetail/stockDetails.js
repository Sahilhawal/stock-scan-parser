import React from "react";
import StockListRow from "../StockListRow/stockListRow";
import StockDataContext from "../../context/context";
import { useParams } from "react-router-dom";
import "./stockDetails.css";

function StockDetails(props) {
  let params = useParams();
  const { stockId } = params;

  const renderStockDetails = (stockContext) => {
    const stock = stockContext.find((stock) => stock.id === parseInt(stockId));
    return (
      <>
        <div className="header-section">
          {<StockListRow stockData={stock} />}
        </div>
        <div className="body-section">
          Sort - %price change in descending order
        </div>
      </>
    );
  };

  return (
    <StockDataContext.Consumer>
      {(stockContext) => <>{renderStockDetails(stockContext)}</>}
    </StockDataContext.Consumer>
  );
}

export default StockDetails;
