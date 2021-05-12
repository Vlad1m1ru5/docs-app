import { render, screen } from "@testing-library/react";
import AppContainer from "./AppContainer";

describe("Container", function () {
  it("should be in the document", function () {
    const caption = "Test container";
    render(<AppContainer>{caption}</AppContainer>);

    const containerElement = screen.getByText(caption);

    expect(containerElement).toBeInTheDocument();
  });
});
