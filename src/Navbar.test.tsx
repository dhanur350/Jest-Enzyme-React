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


describe("Navbar testing", () => {
    it("Test navbar's click", () => {
        const wrapper = shallow(<NavBar position={"navbar"} navLinks={navLinks} />);
        expect(wrapper).toBeTruthy();
    })
});

describe('Navbar Snapshot!', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<NavBar position="sidenav" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});