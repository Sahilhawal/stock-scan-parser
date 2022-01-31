import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import StockList from "./stockList";
import StockDataContext from "../../context/context";
import { mockData } from "../../helpers/mockData";

const customRenderer = () => {
  return render(
    <StockDataContext.Provider value={mockData}>
      <Router>
        <StockList />
      </Router>
    </StockDataContext.Provider>
  );
};

describe("When <StockList /> is rendered with context provider", () => {
  it("should display stock list", () => {
    customRenderer();
    const listParentComponent = screen.getAllByTestId("stock-list")[0];
    expect(listParentComponent).toBeInTheDocument();
  });

  it("should render all the stocks", () => {
    customRenderer();
    const listRowComponent = screen.getAllByTestId("stock-list-row");
    expect(listRowComponent).toHaveLength(mockData.length);
  });
});
