import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Enzyme from "enzyme";
import Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
import jasmineEnzyme from "jasmine-enzyme";

Enzyme.configure({ adapter: new Adapter() });

function Hello(){
  return (<div>hello</div>);
}

describe('Jasmine/Enzyme Sanity Tests', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('says hello via mount', () => {
    const hello = Enzyme.mount(<Hello/>);
    expect(hello.text()).toEqual('hello');
  });

  it('says hello via mount with matcher', () => {
    jasmineEnzyme();
    const hello = Enzyme.mount(<Hello/>);
    expect(hello).toHaveText('hello');
  });
});
