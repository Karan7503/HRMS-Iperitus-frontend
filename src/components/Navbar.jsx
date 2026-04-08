import Logo from "./navbar/Logo";
import NavLinks from "./navbar/NavLinks";
import ThemeDropdown from "./navbar/ThemeDropdown";
import LogoutButton from "./navbar/LogoutButton";

import { useLocation } from "react-router-dom";

function Navbar(){

    const location = useLocation();
    const token = localStorage.getItem("token");

    const isLoginPage = location.pathname === "/";

    return (

        <nav className="
            bg-bgCard
            border-b
            border-borderColor
            pl-4
            h-16
            flex
            items-center
            justify-between
            shadow-md
        ">

            <Logo />

            {!isLoginPage && token && (

                <div className="
                    flex
                    items-center
                    gap-8
                    text-textMain
                    font-medium
                ">

                    <NavLinks />

                    <ThemeDropdown />

                    <LogoutButton />

                </div>

            )}

        </nav>

    );
}

export default Navbar;