import { sum } from "./sum"
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MyComponent from "./components/MyComponent";

Enzyme.configure({ adapter: new Adapter() });

let data = 12;
test("first test case", () => {
    expect(sum(5, 7)).toBe(data);
});


describe('<MyComponent />', () => {
    it('renders three components', () => {
        const wrapper = shallow(<MyComponent />);
        console.log(wrapper.debug);
        //   const children = wrapper.children();
        const childWrapper = wrapper.find("SecondComponent").shallow().find("div");
        expect(wrapper).toBeTruthy();
        expect(childWrapper.text()).toEqual("Hello");
    });
});

describe("<Button/> clicked or not", () => {
    it("Checking if button clicked or not", () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper).toBeTruthy();
        expect(wrapper.find("div").text()).not.toContain("The button was clicked");
        wrapper.find("button").simulate("click");
        expect(wrapper.find(".message").text()).toContain("The button was clicked");
    })
})


describe('MyComponent', () => {
    it('should match snapshot', () => {
      const component = renderer.create(<MyComponent />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

// it("Second test", () => {
//     expect(data).toBe(12);
// })
