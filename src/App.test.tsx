import { render, screen, fireEvent, act } from "@testing-library/react";

describe("test Input Field component", () => {
  test("render Input Field component", () => {
    const InputFieldProps = {
      onChange: jest.fn(),
      type: "text",
      id: "header-search",
      placeholder: "Country Name",
    };
    render(<input {...InputFieldProps} />);
    screen.debug();
  });

  test("snapshot testing", () => {
    const InputProps = {
      onChange: jest.fn(),
      className: "inputField",
      placeHolder: "Country Name",
    };
    const { container } = render(<input {...InputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("check if on change is called", () => {
    const InputProps = {
      onChange: jest.fn(),
      type: "text",
      id: "header-search",
      placeholder: "Country Name",
    };
    render(<input {...InputProps} />);
    const inputElement = screen.getByDisplayValue("");
    screen.debug();
    fireEvent.change(inputElement, { target: { value: "France" } });
    expect(InputProps.onChange).toHaveBeenCalledTimes(1);
  });
});
