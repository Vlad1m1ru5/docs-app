import { render, screen } from "@testing-library/react";
import AppInput from "./app-input";

describe("AppInput", function () {
  it("should render input", function () {
    const type = "text";
    const name = "test-input";
    const placeholder = "Type in Text";
    render(<AppInput type={type} name={name} placeholder={placeholder} />);

    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
  });

  it("should render required input", function () {
    const type = "text";
    const name = "test-input";
    const placeholder = "Type in Text";
    const isRequired = true;
    render(
      <AppInput
        type={type}
        name={name}
        placeholder={placeholder}
        isRequired={isRequired}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement.placeholder).toBeTruthy();
  });

  it("should render aria labeled by input", function () {
    const type = "text";
    const name = "test-input";
    const placeholder = "Type in Text";
    const label = "Sandbox";
    const labelId = "sanbbox";
    render(
      <>
        <input type="text" id={labelId} value={label} />
        <AppInput
          type={type}
          name={name}
          placeholder={placeholder}
          ariaLabelledby={labelId}
        />
      </>
    );

    const inputElement = screen.getByLabelText(label);

    expect(inputElement).toBeInTheDocument();
  });

  it("should render input with label", function () {
    const type = "text";
    const name = "test-input";
    const placeholder = "Type in Text";
    const label = "Sandbox";
    const inputId = "sanbbox";
    render(
      <>
        <label htmlFor={inputId}>{label}</label>
        <AppInput
          type={type}
          name={name}
          placeholder={placeholder}
          id={inputId}
        />
      </>
    );

    const inputElement = screen.getByLabelText(label);

    expect(inputElement).toBeInTheDocument();
  });
});
