import React from "react";
import StockDataContext from "../../context/context";
import { useParams } from "react-router-dom";

function CriteriaVariableValues() {
  let params = useParams();
  const { stockId, criteriaIndex, variable } = params;

  const renderCriteriaVariableValues = (stockContext) => {
    const stock = stockContext?.find((stock) => stock.id === parseInt(stockId));

    const stockCriteriaVariables =
      stock?.criteria[parseInt(criteriaIndex)]?.variable[variable];

    if (stockCriteriaVariables?.type === "value") {
      return renderValueVariables(stockCriteriaVariables);
    } else if (stockCriteriaVariables?.type === "indicator") {
      return renderIndicatorVariables(stock.name, stockCriteriaVariables);
    }
  };

  const renderValueVariables = (stockCriteriaVariables) => {
    return (
      <ul className="text-left headers">
        {stockCriteriaVariables.values.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    );
  };

  const renderIndicatorVariables = (stockName, stockCriteriaVariables) => {
    return (
      <>
        <div className="text-left indicator-header">{stockName}</div>
        <div className="text-left indicator-sub-header">Set Parameters</div>
        <div className="indicator-variable-section">
          <div className="left">{stockCriteriaVariables.parameter_name}</div>
          <input
            type="text"
            name="value"
            defaultValue={stockCriteriaVariables.default_value}
            className="right"
          />
        </div>
      </>
    );
  };

  return (
    <StockDataContext.Consumer>
      {(stockContext) => <>{renderCriteriaVariableValues(stockContext)}</>}
    </StockDataContext.Consumer>
  );
}

export default CriteriaVariableValues;
