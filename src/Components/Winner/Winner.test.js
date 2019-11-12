import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Winner from "./Winner";

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
  render(<Winner />, container);
});

it("should display - (none)", () => {
  const props = {
    hero: {
      name: "Batman",
      score: 9
    },
    villain: null
  };
  render(<Winner {...props} />, container);
  expect(document.querySelector(".hero").textContent).toBe("Hero is Batman");
  expect(document.querySelector(".villain").textContent).toBe("Villain is -");
  expect(document.querySelector(".winner").textContent).toBe("Winner is -");
});

it("should display Batman", () => {
  const props = {
    hero: {
      name: "Batman",
      score: 9
    },
    villain: {
      name: "Joker",
      score: 8
    }
  };
  render(<Winner {...props} />, container);
  expect(document.querySelector(".winner").textContent).toBe(
    "Winner is Batman"
  );
});

it("should display Joker", () => {
  const props = {
    hero: {
      name: "Batman",
      score: 8
    },
    villain: {
      name: "Joker",
      score: 9
    }
  };
  render(<Winner {...props} />, container);
  expect(document.querySelector(".hero").textContent).toBe("Hero is Batman");
  expect(document.querySelector(".villain").textContent).toBe(
    "Villain is Joker"
  );
  expect(document.querySelector(".winner").textContent).toBe("Winner is Joker");
});

it("should display Joker", () => {
  const props = {
    hero: {
      name: "Batman",
      score: 9,
      weakness: "Joker"
    },
    villain: {
      name: "Joker",
      score: 8
    }
  };
  render(<Winner {...props} />, container);
  expect(document.querySelector(".winner").textContent).toBe("Winner is Joker");
});
