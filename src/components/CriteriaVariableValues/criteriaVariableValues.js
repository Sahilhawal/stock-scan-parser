import React from "react";
import StockDataContext from "../../context/context";
import { useParams } from "react-router-dom";
import "./criteriaVariableValues.css";

function CriteriaVariableValues() {
  let params = useParams();
  const { stockId, criteriaIndex, variable } = params;

  const renderCriteriaVariableValues = (stockContext) => {
    const stock = stockContext?.find((stock) => stock.id === parseInt(stockId));

    const stockCriteriaVariable =
      stock?.criteria[parseInt(criteriaIndex)]?.variable[variable];

    if (stockCriteriaVariable?.type === "value") {
      return renderValueVariables(stockCriteriaVariable);
    } else if (stockCriteriaVariable?.type === "indicator") {
      return renderIndicatorVariables(stock.name, stockCriteriaVariable);
    }
  };

  const renderValueVariables = (stockCriteriaVariable) => {
    return (
      <ul className="text-left headers">
        {stockCriteriaVariable.values.map((value) => {
          return <li key={"valueVariable_" + value}>{value}</li>;
        })}
      </ul>
    );
  };

  const renderIndicatorVariables = (stockName, stockCriteriaVariable) => {
    const { default_value, parameter_name } = stockCriteriaVariable;
    return (
      <>
        <div
          className="text-left indicator-header"
          key={"variableValue" + default_value}
        >
          {stockName}
        </div>
        <div className="text-left indicator-sub-header">Set Parameters</div>
        <div className="indicator-variable-section">
          <div className="left">{parameter_name}</div>
          <input
            type="text"
            name="value"
            defaultValue={default_value}
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
