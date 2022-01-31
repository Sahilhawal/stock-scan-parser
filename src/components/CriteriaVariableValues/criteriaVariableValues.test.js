import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Routes, Route } from "react-router";
import CriteriaVariableValues from "./criteriaVariableValues";
import StockDataContext from "../../context/context";
import { mockData } from "../../helpers/mockData";

describe("When <CriteriaVariableValues /> is rendered with context provider", () => {
  it("should display criteria variable values as a list if type is values", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router initialEntries={["/3/criteria/0/variable/$1"]}>
          <Routes>
            <Route
              path="/:stockId/criteria/:criteriaIndex/variable/:variable"
              element={<CriteriaVariableValues />}
            />
          </Routes>
        </Router>
      </StockDataContext.Provider>
    );

    const stockDetailComponent = screen.getAllByTestId(
      "value-variable-list"
    )[0];

    expect(stockDetailComponent).toBeInTheDocument();
  });

  it("should display indicator variable section if variable type is indicator", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router initialEntries={["/5/criteria/2/variable/$4"]}>
          <Routes>
            <Route
              path="/:stockId/criteria/:criteriaIndex/variable/:variable"
              element={<CriteriaVariableValues />}
            />
          </Routes>
        </Router>
      </StockDataContext.Provider>
    );

    const stockDetailComponent = screen.getAllByTestId(
      "indicator-variable-section"
    )[0];

    expect(stockDetailComponent).toBeInTheDocument();
  });

  it("should display criteria variable default_value in input feild", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router initialEntries={["/5/criteria/2/variable/$4"]}>
          <Routes>
            <Route
              path="/:stockId/criteria/:criteriaIndex/variable/:variable"
              element={<CriteriaVariableValues />}
            />
          </Routes>
        </Router>
      </StockDataContext.Provider>
    );

    const stockDetailComponent = screen.getAllByTestId(
      "indicator-variable-input"
    )[0];

    expect(stockDetailComponent).toHaveDisplayValue(14);
  });

  it("should display criteria variable parameter name", async () => {
    render(
      <StockDataContext.Provider value={mockData}>
        <Router initialEntries={["/5/criteria/2/variable/$4"]}>
          <Routes>
            <Route
              path="/:stockId/criteria/:criteriaIndex/variable/:variable"
              element={<CriteriaVariableValues />}
            />
          </Routes>
        </Router>
      </StockDataContext.Provider>
    );

    const stockDetailComponent = screen.getAllByTestId(
      "indicator-variable-parameter-name"
    )[0];

    expect(stockDetailComponent).toHaveTextContent("period");
  });
});
