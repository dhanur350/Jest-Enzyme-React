import { mount, shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import NavBar from "./components/NavBar/NavBar";
import image from "../public/logo192.png"

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
    it('should have a variable with value "positions"', () => {
        const wrapper = shallow(<NavBar position={"navbar"} navLinks={navLinks} />);
        const position = wrapper.prop('position');
        expect(position).toEqual('navbar');

    });
});

describe("Navbar checking", () => {
    it('should have a variable with value "positions"', () => {
        const position = 'navbar';
        const wrapper = shallow(<NavBar position={position} />);
        expect(wrapper.find('.navbar_container').hasClass(`${position}_container`)).toBe(true);
        expect(wrapper.find('.navbar').hasClass(`${position}`)).toBe(true);
        // expect(wrapper.find('.navbar_link_text').hasClass(`${position}_link_text`)).toBe(true);
        // expect(wrapper).
    });
});

describe("logoimage", () => {
    const toHaveProp = (wrapper:any, propKey:any, propValue:any) => {
        const props = wrapper.props();
        const hasProp = Object.prototype.hasOwnProperty.call(props, propKey);
        const value = props[propKey];
        const pass = hasProp && value === propValue;
        const message = () => pass
          ? `expected ${wrapper.name()} not to have prop ${propKey} with value ${propValue}`
          : `expected ${wrapper.name()} to have prop ${propKey} with value ${propValue}, but got ${value}`;
        return { pass, message };
      };
    it("logoimage", () => {
        const position = "navbar";
        const wrapper = shallow(<NavBar position={position} logoImage={image} />);
        // const logoImage = ;
        expect(toHaveProp(wrapper.find("img"), "src", "../public/logo192.png")).toBeTruthy();
    })

    it("userimage", () => {
        const position = "navbar";
        const wrapper = shallow(<NavBar position={position} userImage={image} />);
        // const logoImage = ;
        expect(toHaveProp(wrapper.find("img"), "src", "../public/logo192.png")).toBeTruthy();
    })

    // it("component inside component",()=>{
    //     const nestcomponent = mount(<NavBar position="navbar"/>)
    //     console.log(nestcomponent);
        
    // })
})



describe.skip('Navbar Snapshot!', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<NavBar position="sidenav" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});