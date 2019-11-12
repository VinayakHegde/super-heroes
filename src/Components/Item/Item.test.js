import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Item from "./Item";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  render(<Item />, container);
});

it("should display name as Batnam", () => {
  const props = {
    name: "Batman",
    score: 9,
    weakness: "Joker",
    type: "hero"
  };

  render(<Item {...props} />, container);

  expect(document.querySelector(`.${props.type}`).textContent).toBe(props.name);
});

it("should changes value on click", () => {
  const onClick = jest.fn();
  const props = {
    name: "Batman",
    score: 9,
    weakness: "Joker",
    type: "hero"
  };
  act(() => {
    render(<Item onClick={onClick} {...{ ...props }} />, container);
  });

  const item = document.querySelector(`.${props.type}`);
  expect(item.textContent).toBe(props.name);

  act(() => {
    item.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onClick).toHaveBeenCalledTimes(1);
});
