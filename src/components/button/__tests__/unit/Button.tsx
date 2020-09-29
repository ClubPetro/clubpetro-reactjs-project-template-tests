import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Button from "../../index";

describe("Button", () => {
  it("should render a span when neither onClick or href us supplied", () => {
    const { getByTestId } = render(
      <Button data-testid="button-test">Click</Button>
    );

    expect(getByTestId("button-test").tagName).toEqual("BUTTON");
  });

  it("should render disabled button", () => {
    const { getByTestId } = render(
      <Button data-testid="button-test" onClick={() => {}} name="name-here">
        Click
      </Button>
    );
    const element = getByTestId("button-test");

    expect(element.tagName).toEqual("BUTTON");
    expect(element.getAttribute("name")).toEqual("name-here");
  });

  it("must react to the onClick event", () => {
    const buttonOnClick = jest.fn();
    const { getByTestId } = render(
      <Button
        data-testid="button-test"
        onClick={buttonOnClick}
        name="name-here"
      >
        Click
      </Button>
    );

    const button: HTMLElement = getByTestId("button-test");

    fireEvent.click(button);

    expect(buttonOnClick).toHaveBeenCalled();
  });
});
