import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import StockCriteria from "./stockCriteria";
import { mockData } from "../../helpers/mockData";

describe("When <StockCriteria /> is rendered", () => {
  it("should display criteria text when criteria type is plain_text", async () => {
    render(<StockCriteria stockData={mockData[0]} />);
    const criteriaText = screen.getByText(mockData[0].criteria[0].text);
    expect(criteriaText).toBeInTheDocument();
  });

  it("should replace the criteria text with variable value for type variable", async () => {
    render(
      <Router>
        <StockCriteria stockData={mockData[2]} />
      </Router>
    );
    const criteriaBody = screen.getByTestId("criteria-body");
    expect(criteriaBody.outerHTML).toEqual(
      '<div class="body-section" data-testid="criteria-body">Today’s open &lt; yesterday’s low by <a href="/criteria/0/variable/$1">(-3)</a> %</div>'
    );
  });
});
