import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react"
import "./NavBar.scss"
import "./Sidebar.scss"

export interface ILinks {
    label: string;
    to: string;
    icon: any;
    index: string;
    linkText: string;
}


// export interface INavBarMap {
//     position: string ;
//     logoImage?: string;
//     userImage?: string;
//     focusedLink: string;
//     to?: string;
//     handleLinkFocus: (buttonId: string) => void;
// }
export interface INavBar {
    position: string;
    logoImage?: string;
    userImage?: string;
    to?: string;
    navLinks?:ILinks[]
}

function Navbar({ position, logoImage, userImage,navLinks }: INavBar) {
    // console.log(links);

    // useMemo(() => {
    
    // }, [position])


    const renderNavBar = ({ label, icon, to, index }: ILinks) => {
        // console.log(label, icon, to, index);
        return (
            <NavLink
                key={`navbar-no.${index}`}
                className={`flex flex-row flex-justify-center flex-column text-secondary-color padding-3`}
                to={to}
            >
                <div className="flex flex-justify-center">
                    <Icon size="big" className="navbar_icons" name={icon} />
                </div>
                <div className={`${position}_link_text `}>{label}</div>
            </NavLink>
        )
    }

    return (
        <nav className={`${position}_container text-sm flex flex-justify-center`}>
            <div className={`${position} box-shadow-navbar border-radius-1`}>
                {logoImage ? (
                    <div className="logoimg flex flex-align-center padding-r-3">
                        <img src={logoImage} alt="Logo" />
                    </div>
                ) : null}
                {navLinks?.map(renderNavBar)}
                {userImage ? (
                    <div className="userlogo flex flex-align-center padding-l-3">
                        <img src={userImage} alt="Logo" />
                    </div>
                ) : null}
            </div>
        </nav>
    )

}

export default memo(Navbar)