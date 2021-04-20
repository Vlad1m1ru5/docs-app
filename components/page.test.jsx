import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", function () {
  function getHeight(element) {
    return element.getBoundingClientRect().height;
  }

  it("should be viewport height", function () {
    const caption = "Page content";
    render(<Page>{caption}</Page>);
    const pageElement = screen.getByText(caption);

    const pageHeight = getHeight(pageElement);
    const documentHeight = getHeight(document.documentElement);

    expect(pageHeight).toEqual(documentHeight);
  });
});
