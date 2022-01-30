import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { handleResponse } from "../../helpers/handleResponse";
import StockDetails from "../StockDetail/stockDetails";
import StockList from "../StockList/stockList";
import StockDataContext from "../../context/context";
import "./landingPage.css";
import CriteriaVariableValues from "../CriteriaVariableValues/criteriaVariableValues";

function LandingPage() {
  const [stocksData, setStocksData] = useState();
  useEffect(() => {
    fetch("https://mobile-app-challenge.herokuapp.com/data")
      .then(handleResponse)
      .then((data) => setStocksData(data));
  }, []);

  return (
    <div className="main-container">
      <div className="stocks-container">
        <StockDataContext.Provider value={stocksData}>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<StockList />} />
              <Route path=":stockId" element={<StockDetails />} />
              <Route
                path=":stockId/criteria/:criteriaIndex/variable/:variable"
                element={<CriteriaVariableValues />}
              />
            </Routes>
          </BrowserRouter>
        </StockDataContext.Provider>
      </div>
    </div>
  );
}

export default LandingPage;
