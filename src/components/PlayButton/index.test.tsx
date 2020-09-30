import React from "react";
import { render } from "@testing-library/react";
import PlayButton from "./index";

test("PlayButton", () => {
  const onClick = jest.fn();
  const { container } = render(<PlayButton onClick={onClick} />);

  expect(container).toMatchSnapshot();
});
