import { render, screen } from "@testing-library/react";
import AppLink from "./AppLink";

describe("AppLink", function () {
  it("should pass anchor href", function () {
    const home = "Home";
    render(<AppLink href="/">{home}</AppLink>);

    const anchorElement = screen.getByText(home);

    expect(anchorElement).toHaveAttribute("href");
  });

  it("should pass anchor props", function () {
    const login = "Login";
    render(<AppLink href="/login" aria-label={login} />);

    const anchorElement = screen.getByLabelText(login);

    expect(anchorElement).toBeInTheDocument();
  });
});
