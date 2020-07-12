import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders App component without errors", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("to check the counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("to check the counter increment button", () => {
  const wrapper = setup();
  const counterIncrementButton = findByAttr(
    wrapper,
    "counter-increment-button"
  );
  expect(counterIncrementButton.length).toBe(1);
});

test("the counter to start with 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("increases the counter by 1 when incremented", () => {
  const counter = 6;
  const wrapper = setup(null, { counter });
  const button = findByAttr(wrapper, "counter-increment-button");
  button.simulate("click");
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("to check the counter decrement button", () => {
  const wrapper = setup();
  const counterDecrementButton = findByAttr(
    wrapper,
    "counter-decrement-button"
  );
  expect(counterDecrementButton.length).toBe(1);
});

test("decreases the counter by 1 when decremented", () => {
  const counter = 6;
  const wrapper = setup(null, { counter });
  const button = findByAttr(wrapper, "counter-decrement-button");
  button.simulate("click");
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("should not decrement the counter less than 0 and should throw and alert", () => {
  const counter = 0;
  const error = false;
  const wrapper = setup(null, { counter, error });
  const button = findByAttr(wrapper, "counter-decrement-button");
  button.simulate("click");
  const counterDisplay = findByAttr(wrapper, "counter-display");
  const alert = findByAttr(wrapper, "counter-error");
  expect(counterDisplay.text()).toContain(0);
  expect(alert.length).toBe(1);
});
