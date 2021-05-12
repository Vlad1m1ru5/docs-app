import { render, screen } from "@testing-library/react";
import AppMain from "./AppMain";

describe("AppMain", function () {
  it("should scale width to flex container", function () {
    const caption = "Main Content";
    const { container } = render(<AppMain>{caption}</AppMain>);

    const mainElement = screen.getByText(caption);

    expect(mainElement.offsetWidth).toEqual(container.offsetWidth);
  });
});
