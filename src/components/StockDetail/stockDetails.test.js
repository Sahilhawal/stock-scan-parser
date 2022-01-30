import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import StockDetails from "./stockDetails";
import StockDataContext from "../../context/context";
import { mockData } from "../../helpers/mockData";

describe("When <StockDetails /> is rendered with context provider", () => {
  it("should display stock detail section", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router>
          <StockDetails />
        </Router>
      </StockDataContext.Provider>
    );

    const stockDetailComponent = screen.getAllByTestId(
      "stock-detail-section"
    )[0];

    expect(stockDetailComponent).toBeInTheDocument();
  });
});
