// import { sum } from "./sum"
import { mount, shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MyComponent from "./components/MyComponent";
import { render, screen } from '@testing-library/react';
import fetchMock, { FetchMockSandbox } from "fetch-mock";
import '@testing-library/jest-dom/extend-expect';

let mock: FetchMockSandbox;

beforeEach(() => {
    mock = fetchMock.sandbox();
});


Enzyme.configure({ adapter: new Adapter() });
// let data = 12; 
// test("first test case", () => {
//     expect(sum(5, 7)).toBe(data);
// });


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

describe('renders users when API call succeeds', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('displays list of users', async () => {
        const fakeUsers = [    { id: 1, name: 'Joe' },    { id: 2, name: 'Tony' },  ];
        mock.mock("https://jsonplaceholder.typicode.com/users", { status: 200, body: JSON.stringify(fakeUsers) });
      
        const wrapper = shallow(<MyComponent />);
        const component = renderer.create(<MyComponent />);
        console.log(wrapper);
        console.log(component);
        render(<MyComponent />);
        const heading = screen.getByRole('heading', { name: 'List of Users' });
        expect(heading).toBeInTheDocument();
      
        // expect(wrapper.find('h1')).toEqual('List of Users');
        // expect(screen.getByRole('heading')).toEqual(expect.stringContaining('List of Users'));

      
        await Promise.resolve(); // Wait for promises to resolve (e.g. useEffect)
      
        // expect(wrapper.find('li')).toHaveLength(2);
        expect(wrapper.find('#li1').text()).toContain('Leanne Graham');
        // expect(wrapper.find('#li2').at(1)).toHaveText('Tony');
      });
      
})


// it("Second test", () => {
//     expect(data).toBe(12);
// })
