import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Sun, Moon, Droplets, Leaf, Flower, Flame } from "lucide-react";
import ThemeOption from "./ThemeOption";

function ThemeDropdown(){

    const { theme, setTheme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const changeTheme = (selectedTheme) => {

        setTheme(selectedTheme);

        localStorage.setItem("theme", selectedTheme);

        setOpen(false);

    };

    useEffect(()=>{

        const handleClickOutside = (event) => {

            if(!dropdownRef.current?.contains(event.target)){

                setOpen(false);

            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);

    },[]);
    
    const size = 15;

    return (

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

                    border
                    border-borderColor

                    bg-bgMain

                    hover:bg-primarySoft

                    transition
                "
            >

                {theme === "dark" && <Moon stroke="white" size={16}/>}
                {theme === "light" && <Sun size={16}/>}
                {theme === "softBlue" && <Droplets size={16}/>}
                {theme === "mintGreen" && <Leaf size={16}/>}
                {theme === "softLavender" && <Flower size={16}/>}
                {theme === "Flame" && <Flame size={16}/>}

            </button>

            {open && (

                

               <div className="
                    absolute
                    right-[-6px]
                    top-12
                    
                    w-[220px]

                    p-3

                    grid
                    grid-cols-3
                    gap-x-2
                    gap-y-3

                    bg-bgCard

                    border
                    border-borderColor

                    rounded-xl

                    shadow-lg

                    z-50
                ">
                    <ThemeOption
                        label="Light"
                        active={theme==="light"}
                        icon={<Sun size={size}
                            stroke="rgb(249 115 22)"
                            fill="yellow"
                        />}
                        
                        onClick={()=>changeTheme("light")}
                    />

                    <ThemeOption
                        label="Dark"
                        active={theme==="dark"}
                        icon={<Moon size={size}
                            fill="rgb(24 24 27)"
                        />}
                        onClick={()=>changeTheme("dark")}
                    />

                    <ThemeOption
                        label="Blue"
                        active={theme==="softBlue"}
                        icon={<Droplets size={size}
                            stroke="none"
                            fill="rgb(79 124 255)"
                        />}
                        onClick={()=>changeTheme("softBlue")}
                    />

                    <ThemeOption
                        label="Mint"
                        active={theme==="mintGreen"}
                        icon={<Leaf size={size}
                            stroke="none"
                            fill="rgb(58 191 175)"

                        />}
                        onClick={()=>changeTheme("mintGreen")}
                    />

                    <ThemeOption
                        label="Lavender"
                        active={theme==="softLavender"}
                        icon={<Flower size={size}
                            stroke="none"
                            fill="rgb(124 131 253)"
                        />}
                        onClick={()=>changeTheme("softLavender")}
                    />

                    <ThemeOption
                        label="Flame"
                        active={theme==="Flame"}
                        icon={<Flame size={size}
                            stroke="none"
                            fill="rgb(249 115 22"
                        />}
                        onClick={()=>changeTheme("Flame")}
                    />

                </div>

            )}

        </div>

    );

}

export default ThemeDropdown;