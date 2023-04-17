import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import NavBar from "./components/NavBar/NavBar";

Enzyme.configure({ adapter: new Adapter() });


const navLinks = [
    {
        index: "1",
        label: "Accounts",
        linkText: "ACCOUNTS",
        to: "/accounts",
        icon: "address card outline",
    },
    {
        index: "2",
        linkText: "PROJECTS",
        label: "Projects",
        to: "/projects",
        icon: "briefcase",
    },
    {
        index: "3",
        linkText: "DIRECTORY",
        label: "Directory",
        to: "/directory",
        icon: "file alternate",
    },
];


describe.skip("Navbar testing", () => {
    it('should have a variable with value "hello"', () => {
        const wrapper = shallow(<NavBar position={"navbar"} />);
        const position = wrapper.prop('position');
        expect(position).toEqual('navbar');

    });
});

describe("Navbar checking", () => {
    it('should have a variable with value "hello"', () => {
        const position = 'navbar';
    const wrapper = shallow(<NavBar position={position} />);
    expect(wrapper.find('.navbar_container').hasClass(`${position}_container`)).toBe(true);
    expect(wrapper.find('.navbar').hasClass(`${position}`)).toBe(true);
    // expect(wrapper.find('.navbar_link_text').hasClass(`${position}_link_text`)).toBe(true);

    });
});



describe('Navbar Snapshot!', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<NavBar position="sidenav" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});