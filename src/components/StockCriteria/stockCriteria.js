import React from "react";
import { Link } from "react-router-dom";
const reactStringReplace = require("react-string-replace");

function StockCriteria(props) {
  const { criteria = [] } = props.stockData || {};

  const renderStockCriterias = () => {
    const criteriaReplacedWithVariables = replaceTextWithVariableValues();

    return criteriaReplacedWithVariables?.map((criteria, i) => {
      return (
        <div
          className="body-section"
          key={"criteria_" + i}
          data-testid="criteria-body"
        >
          {criteria?.text}
        </div>
      );
    });
  };

  const replaceTextWithVariableValues = () => {
    return criteria.map((criteria, criteriaIndex) => {
      if (criteria?.type === "variable") {
        for (var variableKey in criteria.variable) {
          const variableData = criteria.variable[variableKey];
          criteria.text = reactStringReplace(criteria.text, variableKey, () =>
            replacerFunction(criteriaIndex, variableKey, variableData)
          );
        }
      }
      return criteria;
    });
  };

  const replacerFunction = (criteriaIndex, variableKey, variableData) => {
    return (
      <Link
        to={"criteria/" + criteriaIndex + "/variable/" + variableKey}
        key={"criteria_" + criteriaIndex + "_variable_" + variableKey}
      >
        ({getValueOfVariable(variableData)})
      </Link>
    );
  };

  const getValueOfVariable = (variable) => {
    return variable?.type === "value"
      ? variable?.values[0]
      : variable?.default_value;
  };

  return <>{renderStockCriterias()}</>;
}

export default StockCriteria;
