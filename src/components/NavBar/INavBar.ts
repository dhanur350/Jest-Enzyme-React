export interface INavBar{
    position: "sidenav" | "navbar";
    logoImage?: string | "";
    userImage?: string;
    to?:string;
    navlinks?:[]
    // position: string; focusedLink: string; handleLinkFocus: (buttonId: string) => void;
    // isActive?: (match: match<{}>, location: Location) => boolean;
}
