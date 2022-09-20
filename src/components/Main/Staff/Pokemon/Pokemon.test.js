import React from "react";
import { shallow } from "enzyme";
import Pokemon from "./Pokemon";

describe("Pokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
