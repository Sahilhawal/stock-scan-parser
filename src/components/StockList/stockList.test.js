import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import StockList from "./stockList";
import StockDataContext from "../../context/context";
import { mockData } from "../../helpers/mockData";

describe("When <StockList /> is rendered with context provider", () => {
  it("should display stock list", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router>
          <StockList />
        </Router>
      </StockDataContext.Provider>
    );
    const listParentComponent = screen.getAllByTestId("stock-list")[0];
    expect(listParentComponent).toBeInTheDocument();
  });

  it("should redirect to stock details page", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router>
          <StockList />
        </Router>
      </StockDataContext.Provider>
    );
    const listRowComponent = screen.getAllByTestId("stock-list-row");
    expect(listRowComponent).toHaveLength(mockData.length);
  });
});
