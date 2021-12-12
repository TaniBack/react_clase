import React from "react";
import { shallow } from "enzyme";
import Reviews from "./Reviews";

describe("Reviews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper).toMatchSnapshot();
  });
});
