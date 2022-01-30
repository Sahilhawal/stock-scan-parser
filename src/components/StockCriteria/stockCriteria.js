import React from "react";
import { Link, useParams } from "react-router-dom";
const reactStringReplace = require("react-string-replace");

function StockCriteria(props) {
  const { criteria = [] } = props.stockData || {};
  let params = useParams();
  const { stockId } = params;

  const renderStockCriterias = () => {
    const updatedCriteria = replaceText();

    return updatedCriteria?.map((criteria, i) => {
      return (
        <div className="body-section" key={"criteria_" + i}>
          {criteria?.text}
        </div>
      );
    });
  };

  const replaceText = () => {
    return criteria.map((criteria, criteriaIndex) => {
      if (criteria?.type === "variable") {
        for (var key in criteria.variable) {
          const variable = criteria.variable[key];
          criteria.text = reactStringReplace(criteria.text, key, (match, i) => (
            <Link to={"criteria/" + criteriaIndex + "/variable/" + key}>
              {getValueOfVariable(variable)}
            </Link>
          ));
        }
      }
      return criteria;
    });
  };

  const getValueOfVariable = (variable) => {
    return variable?.values?.length > 0
      ? variable?.values[0]
      : variable?.default_value;
  };

  return <>{renderStockCriterias()}</>;
}

export default StockCriteria;
