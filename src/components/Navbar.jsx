import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Iperitus.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Sun, Moon } from "lucide-react";

function Navbar(){

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const { theme, setTheme } = useContext(ThemeContext);

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    // toggle only light ↔ dark
    const toggleTheme = () => {

        setTheme(theme === "dark" ? "light" : "dark");

    };

    const isDark = theme === "dark";


    return(

        <nav
        className="
        bg-bgCard
        border-b
        border-borderColor
        px-8
        h-16
        flex
        items-center
        justify-between
        shadow-md
        ">

            {/* LEFT - LOGO */}
            <div className="flex items-center gap-3">

                <img 
                    src={logo} 
                    alt="Peritus Logo"
                    className="h-20 w-auto object-contain"
                />

                <span className="text-textMain font-semibold text-lg">
                    HRMS
                </span>

            </div>


            {/* RIGHT - NAV LINKS */}
            {token && (

                <div
                className="
                flex
                items-center
                gap-8
                text-textMain
                font-medium
                "
                >

                    <Link to="/dashboard" className="hover:text-primary transition">
                        Dashboard
                    </Link>

                    <Link to="/employees" className="hover:text-primary transition">
                        Employees
                    </Link>

                    <Link to="/attendance" className="hover:text-primary transition">
                        Attendance
                    </Link>

                    <Link to="/leave" className="hover:text-primary transition">
                        Leave
                    </Link>


                    {/* THEME TOGGLE */}
                    <button
                        onClick={toggleTheme}
                        className="
                        flex
                        items-center
                        justify-center
                        w-9
                        h-9
                        rounded-full

                        bg-bgMain
                        border
                        border-borderColor

                        transition
                        hover:bg-primary/10
                        "
                        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >

                        {isDark
                            ? <Sun className="w-4 h-4 text-yellow-500" />
                            : <Moon className="w-4 h-4 text-gray-600" />
                        }

                    </button>


                    {/* LOGOUT BUTTON */}
                    <button
                        onClick={logoutUser}
                        className="
                        bg-primary
                        hover:bg-primaryHover
                        text-white
                        px-3
                        py-1
                        rounded
                        transition
                        "
                    >
                        Logout
                    </button>

                </div>

            )}

        </nav>

    );
}

export default Navbar;