import React from "react";
import StockListRow from "../StockListRow/stockListRow";
import StockDataContext from "../../context/context";
import { useParams } from "react-router-dom";
import "./stockDetails.css";
import StockCriteria from "../StockCriteria/stockCriteria";

function StockDetails(props) {
  let params = useParams();
  const { stockId } = params;

  const renderStockDetails = (stockContext) => {
    const stock = stockContext?.find((stock) => stock.id === parseInt(stockId));
    return (
      <>
        <div className="header-section">
          <StockListRow stockData={stock} />
        </div>
        <StockCriteria stockData={stock} />
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
