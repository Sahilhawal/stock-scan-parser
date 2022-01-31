import React from "react";
import { render, screen } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
import {
  MemoryRouter as Router,
  Outlet,
  Routes,
  Route,
  useParams,
} from "react-router";
import { createMemoryHistory } from "history";
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
});
