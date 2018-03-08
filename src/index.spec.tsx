import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
// import * as Enzyme from "enzyme";
// import * as Adapter from "enzyme-adapter-react-16";
// import jasmineEnzyme from "jasmine-enzyme";
//
// Enzyme.configure({ adapter: new Adapter() });


class Hello extends React.Component<undefined, undefined> {
  render(): JSX.Element {
    return (<div>hello</div>);
  }
}

describe('Jasmine/Enzyme Sanity Tests', () => {
  beforeEach(() => {
    // jasmineEnzyme();
  });

  it('says hello via renderIntoDocument', () => {
    const hello = TestUtils.renderIntoDocument(<Hello/>) as Hello;
    const el = ReactDOM.findDOMNode(hello) as HTMLElement;
    expect(el.innerText).toEqual("hello");
  });

  // it('says hello via mount', () => {
  //   const hello = Enzyme.mount(<Hello/>);
  //   expect(hello.text()).toEqual('hello');
  // });
  //
  // it('says hello via mount with matcher', () => {
  //   jasmineEnzyme();
  //   const hello = Enzyme.mount(<Hello/>);
  //   expect(hello.text()).toHaveText('hello');
  // });
});
