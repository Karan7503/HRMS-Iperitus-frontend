import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Iperitus.png";

function Navbar(){

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const changeTheme = (theme) => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem("theme", theme);

    };

    return(

        <nav
        className="
        bg-bgCard
        border-b
        border-borderColor

        px-8
        py-3

        flex
        items-center
        justify-between

        shadow-md
        "
        >

            {/* LEFT - LOGO */}
            <div className="flex items-center gap-3">

                <img 
                    src={logo} 
                    alt="Peritus Logo"
                    className="h-10"
                />

                <span
                className="
                text-textMain
                font-semibold
                text-lg
                "
                >
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

                    <Link 
                        to="/dashboard"
                        className="
                        hover:text-primary
                        transition
                        "
                    >
                        Dashboard
                    </Link>

                    <Link 
                        to="/employees"
                        className="
                        hover:text-primary
                        transition
                        "
                    >
                        Employees
                    </Link>

                    <Link 
                        to="/attendance"
                        className="
                        hover:text-primary
                        transition
                        "
                    >
                        Attendance
                    </Link>

                    <Link 
                        to="/leave"
                        className="
                        hover:text-primary
                        transition
                        "
                    >
                        Leave
                    </Link>


                    {/* THEME SWITCH */}
                    <select
                        onChange={(e) => changeTheme(e.target.value)}
                        className="
                        bg-bgMain
                        text-textMain

                        border
                        border-borderColor

                        rounded
                        px-2
                        py-1
                        "
                    >

                        <option value="light">
                            Light
                        </option>

                        <option value="dark">
                            Dark
                        </option>

                        <option value="green">
                            Green
                        </option>

                    </select>


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