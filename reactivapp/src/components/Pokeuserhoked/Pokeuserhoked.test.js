import React from "react";
import { shallow } from "enzyme";
import Pokeuserhoked from "./Pokeuserhoked";

describe("Pokeuserhoked", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokeuserhoked />);
    expect(wrapper).toMatchSnapshot();
  });
});
