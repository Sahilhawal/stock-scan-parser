import React from "react";
import { Link } from "react-router-dom";
const reactStringReplace = require("react-string-replace");

function StockCriteria(props) {
  const { criteria = [] } = props.stockData || {};

  const renderStockCriterias = () => {
    const updatedCriteria = replaceTextWithVariableValues();

    return updatedCriteria?.map((criteria, i) => {
      return (
        <div className="body-section" key={"criteria_" + i}>
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
          criteria.text = reactStringReplace(criteria.text, variableKey, () => (
            <Link
              to={"criteria/" + criteriaIndex + "/variable/" + variableKey}
              key={"criteria_" + criteriaIndex + "_variable_" + variableKey}
            >
              {getValueOfVariable(variableData)}
            </Link>
          ));
        }
      }
      return criteria;
    });
  };

  const getValueOfVariable = (variable) => {
    return variable?.type === "value"
      ? variable?.values[0]
      : variable?.default_value;
  };

  const stringReplacerFunction = (variableData) => {};

  return <>{renderStockCriterias()}</>;
}

export default StockCriteria;
