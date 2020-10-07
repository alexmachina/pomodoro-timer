import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Button", () => {
  const onClick = jest.fn();
  const { container } = render(<Button onClick={onClick}>Play</Button>);

  expect(container).toMatchSnapshot();
});
