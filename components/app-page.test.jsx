import { render, screen } from "@testing-library/react";
import AppPage from "./app-page";

describe("Page", function () {
  function getHeight(element) {
    return element.getBoundingClientRect().height;
  }

  it("should be viewport height", function () {
    const caption = "Page content";
    render(<AppPage>{caption}</AppPage>);
    const pageElement = screen.getByText(caption);

    const pageHeight = getHeight(pageElement);
    const documentHeight = getHeight(document.documentElement);

    expect(pageHeight).toEqual(documentHeight);
  });
});
