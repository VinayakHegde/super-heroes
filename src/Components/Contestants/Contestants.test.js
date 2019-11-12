import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Contestants from "./Contestants";

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
  render(<Contestants />, container);
});

it("should have 4 heroes", () => {
  const props = {
    type: "hero",
    contentants: [
      {
        name: "Batman",
        score: 8.3,
        type: "hero",
        weakness: "Joker"
      },
      {
        name: "Superman",
        score: 9.6,
        type: "hero",
        weakness: "Lex Luthor"
      },
      {
        name: "Gamora",
        score: 8.4,
        type: "villan"
      },
      {
        name: "Wonder Woman",
        score: 8.7,
        type: "hero"
      }
    ]
  };
  render(<Contestants {...props} />, container);
  expect(document.querySelector(".contentants").childNodes.length).toBe(4);
});
