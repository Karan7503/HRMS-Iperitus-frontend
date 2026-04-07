import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/IPeritusLogo.png";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Sun, Moon, Monitor, Check, Droplets, Leaf, Flower, Palette, Flame  } from "lucide-react";

function Navbar(){

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
	const location = useLocation();

	//location/url check
	const isLoginPage = location.pathname === "/"; 
	const isDashboard = location.pathname === "/dashboard"; 
	const isEmployee = location.pathname === "/employees"; 
	const isAttendance = location.pathname === "/attendance"; 
	const isLeave = location.pathname === "/leave"; 


    const { theme, setTheme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const changeTheme = (selectedTheme) => {

        if(selectedTheme === "system"){

            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            setTheme(prefersDark ? "dark" : "light");

            localStorage.setItem("theme", "system");

        }
        else{

            setTheme(selectedTheme);

            localStorage.setItem("theme", selectedTheme);

        }

        setOpen(false);
    };

    // close dropdown when clicking outside
    useEffect(()=>{

        const handleClickOutside = (event) => {

            if(!dropdownRef.current?.contains(event.target)){

                setOpen(false);

            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);

    },[]);


    return(

        <nav
        className="
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

            {/* LEFT - LOGO */}
            <div className="flex items-center gap-3">

                <img 
                    src={logo} 
                    alt="Peritus Logo"
                    className="h-7 w-auto object-contain "
                />

                <span className="text-textMain font-light text-xl tracking-wide -ml-6">
                    {/* HRMS */}
                </span>

            </div>


            {/* RIGHT - NAV LINKS */}
            {!isLoginPage && token && (

                <div
                className="
                flex
                items-center
                gap-8
                text-textMain
                font-medium
                "
                >
					{!isDashboard && (
						<Link to="/dashboard" className="hover:text-primary transition font-normal">
							Dashboard
						</Link>
					)}

					{!isEmployee && (

						<Link to="/employees" className="hover:text-primary transition font-normal">
							Employees
						</Link>
					)}

					{!isAttendance && (
						<Link to="/attendance" className="hover:text-primary transition font-normal">
							Attendance
						</Link>
					)}

					{!isLeave && (
						<Link to="/leave" className="hover:text-primary transition font-normal">
							Leave
						</Link>
					)}


                    {/* GOOGLE STYLE THEME DROPDOWN */}
                    <div className="relative" ref={dropdownRef}>

                        <button
                            onClick={() => setOpen(!open)}
                            className="
                            flex
                            items-center
                            justify-center
                            w-9
                            h-9
                            rounded-full
							bg-primarySoft
                            bg-bgMain
                            border
                            border-borderColor
							cursor-pointer
							hover:bg-primarySoft
                            transition
							
                            "
                        >

                            {/* {theme === "dark"
                                ? <Sun className="w-4 h-4 text-yellow-400" />
                                : <Moon className="w-4 h-4 text-gray-600" />
                            } */}

							{theme === "dark" && (<Moon  stroke="white" className="w-4 h-4 text-gray-600" />)}
							{theme === "light" && (<Sun  className="w-4 h-4 text-gray-600" />)}
							{theme === "softBlue" && (<Droplets className="w-4 h-4 text-gray-600" />)}
							{theme === "mintGreen" && (<Leaf className="w-4 h-4 text-gray-600" />)}
							{theme === "softLavender" && (<Flower className="w-4 h-4 text-gray-600" />)}
							{theme === "Flame" && (<Flame className="w-4 h-4 text-gray-600" />)}
							

                        </button>

						{open && (

						<div
							className="
							absolute
							right-0
							mt-3

							w-72
							p-4
							grid
							grid-cols-3
							gap-4

							bg-bgCard
							border
							border-borderColor

							rounded-3xl
							shadow-xl
							z-50
							"
						>

							{/* LIGHT */}
							<button
							onClick={() => changeTheme("light")}
							className={`
							flex flex-col items-center justify-center gap-1
							w-20 h-20 rounded-2xl
							transition
							hover:bg-primary/10 hover:scale-105

							${theme === "light" ? "bg-primary/10" : ""}
							`}
							>

								{/* className="text-yellow-500" */}
							<Sun
								size={22}
								stroke="orange"   // outline
  								fill="yellow" 
							/>

							<span className="text-xs font-normal text-textMain">
								Light
							</span>

							</button>


							{/* DARK */}
							<button
							onClick={() => changeTheme("dark")}
							className={`
							flex flex-col items-center justify-center gap-1
							w-20 h-20 rounded-2xl
							transition
							hover:bg-primary/10 hover:scale-105

							${theme === "dark" ? "bg-primary/10" : ""}
							`}
							>

								{/* className="text-gray-800 dark:text-gray-200 fill-dark-500" */}
							<Moon
								size={22}
								stroke="white"   
  								fill="black" 
							/>

							<span className="text-xs font-normal text-textMain">
								Dark
							</span>

							</button>


							{/* SOFT BLUE */}
							<button
							onClick={() => changeTheme("softBlue")}
							className={`
							flex flex-col items-center justify-center gap-1
							w-20 h-20 rounded-2xl
							transition
							hover:bg-primary/10 hover:scale-105

							${theme === "softBlue" ? "bg-primary/10" : ""}
							`}
							>

							<Droplets
								size={22}
								stroke="white"

								className="text-blue-500 fill-blue-500"
							/>

							<span className="text-xs font-normal text-textMain">
								Blue
							</span>

							</button>


							{/* MINT */}
							<button
							onClick={() => changeTheme("mintGreen")}
							className={`
							flex flex-col items-center justify-center gap-1

							w-20 h-20
							rounded-2xl

							transition

							hover:bg-primary/10
							hover:scale-105

							${theme === "mintGreen"
								? "bg-primary/10"
								: ""
							}
							`}
							>

							<Leaf
								size={22}
								stroke="white"

								className="
								text-emerald-500
								fill-emerald-500
								"
							/>

							<span className="text-xs font-normal text-textMain">
								Mint
							</span>

							</button>


							{/* LAVENDER */}
							<button
							onClick={() => changeTheme("softLavender")}
							className={`
							flex flex-col items-center justify-center gap-1
							w-20 h-20 rounded-2xl
							transition
							hover:bg-primary/10 hover:scale-105

							${theme === "softLavender" ? "bg-primary/10" : ""}
							`}
							>

							<Flower
								size={22}
								stroke="white"
								className="text-violet-500 fill-violet-500"
							/>

							<span className="text-xs font-normal text-textMain">
								Lavn
							</span>

							</button>


							{/* ORANGE */}
							<button
							onClick={() => changeTheme("Flame")}
							className={`
							flex flex-col items-center justify-center gap-1
							w-20 h-20 rounded-2xl
							transition
							hover:bg-primary/10 hover:scale-105

							${theme === "Flame" ? "bg-primary/10" : ""}
							`}
							>

							<Flame
								size={22}
								
								className="text-orange-500 fill-orange-500"
							/>

							<span className="text-xs font-normal text-textMain">
								Flame
							</span>

							</button>

						</div>

						)}
                        

                    </div>


                    {/* LOGOUT BUTTON */}
                    <button
                        onClick={logoutUser}
                        className="
                        bg-primary
                        hover:bg-primaryHover
                        text-white
						mr-3
                        px-3
                        py-1
                        rounded
                        transition
						cursor-pointer
						
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