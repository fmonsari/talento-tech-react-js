import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} />                
                </Link>          
            </div>
            <Nav />
        </header>
    );
};