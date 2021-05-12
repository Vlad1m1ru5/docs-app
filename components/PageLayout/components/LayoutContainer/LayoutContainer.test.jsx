import { render, screen } from "@testing-library/react";
import LayoutContainer from "./LayoutContainer";

describe("Page", function () {
  function getHeight(element) {
    return element.getBoundingClientRect().height;
  }

  it("should be viewport height", function () {
    const caption = "Page content";
    render(<LayoutContainer>{caption}</LayoutContainer>);
    const pageElement = screen.getByText(caption);

    const pageHeight = getHeight(pageElement);
    const documentHeight = getHeight(document.documentElement);

    expect(pageHeight).toEqual(documentHeight);
  });
});
