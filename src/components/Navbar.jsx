import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Iperitus.png";

function Navbar(){

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return(

        <nav className="bg-gray-900 px-8 py-3 flex items-center justify-between shadow-md">

            {/* LEFT - LOGO */}
            <div className="flex items-center gap-3">
                <img 
                    src={logo} 
                    alt="Peritus Logo"
                    className="h-10"
                />

                <span className="text-white font-semibold text-lg">
                    HRMS
                </span>
            </div>


            {/* RIGHT - SHOW ONLY IF LOGGED IN */}
            {token && (

                <div className="flex items-center gap-8 text-gray-200 font-medium">

                    <Link 
                        to="/dashboard"
                        className="hover:text-indigo-400 transition"
                    >
                        Dashboard
                    </Link>

                    <Link 
                        to="/employees"
                        className="hover:text-indigo-400 transition"
                    >
                        Employees
                    </Link>

                    <Link 
                        to="/attendance"
                        className="hover:text-indigo-400 transition"
                    >
                        Attendance
                    </Link>

                    <Link 
                        to="/leave"
                        className="hover:text-indigo-400 transition"
                    >
                        Leave
                    </Link>

                    {/* LOGOUT BUTTON */}
                    <button
                        onClick={logoutUser}
                        className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                    >
                        Logout
                    </button>

                </div>

            )}

        </nav>

    );
}

export default Navbar;