import { render, screen } from "@testing-library/react";
import Container from "./container";

describe("Container", function () {
  it("should be in the document", function () {
    const caption = "Test container";
    render(<Container>{caption}</Container>);

    const containerElement = screen.getByText(caption);

    expect(containerElement).toBeInTheDocument();
  });
});
