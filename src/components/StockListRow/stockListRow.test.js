import React from "react";
import { render, screen } from "@testing-library/react";
import StockListRow from "./stockListRow";
import { mockData } from "../../helpers/mockData";

describe("When <StockListRow /> is rendered", () => {
  it("should display stock name", async () => {
    render(<StockListRow stockData={mockData[0]} />);
    const stockNameDiv = screen.getAllByTestId("stock-name-div")[0];
    expect(stockNameDiv).toBeInTheDocument();
  });

  it("should display stock tag", async () => {
    render(<StockListRow stockData={mockData[0]} />);
    const stockTagDiv = screen.getAllByTestId("stock-tag-div")[0];
    expect(stockTagDiv).toBeInTheDocument();
  });

  it("should have correct class name for stock tag", async () => {
    render(<StockListRow stockData={mockData[0]} />);
    const stockTagDiv = screen.getAllByTestId("stock-tag-div")[0];
    expect(stockTagDiv).toHaveClass("green");
  });

  it("should display hiphens as stock name when data is not available", async () => {
    render(<StockListRow />);
    const stockNameDiv = screen.getAllByTestId("stock-name-div");
    expect(stockNameDiv[0]).toHaveTextContent("-");
  });
});
