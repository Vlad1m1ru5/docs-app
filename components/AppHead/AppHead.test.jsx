import { render, waitFor } from "@testing-library/react";
import AppHead from "./AppHead";

describe("AppHead", function () {
  it("should render title", function () {
    render(<AppHead />);
    waitFor(() => expect(document.title).toEqual("Docs App"));
  });
});
