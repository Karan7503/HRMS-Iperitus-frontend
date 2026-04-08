import { Link, useLocation } from "react-router-dom";

function NavLinks(){

    const location = useLocation();

    const linkStyle = `
    font-normal
    transition
    hover:text-primary
`;

    return (

        <>
            {location.pathname !== "/dashboard" && (
                <Link to="/dashboard" className={linkStyle}>
                    Dashboard
                </Link>
            )}

            {location.pathname !== "/employees" && (
                <Link to="/employees" className={linkStyle}>
                    Employees
                </Link>
            )}

            {location.pathname !== "/attendance" && (
                <Link to="/attendance" className={linkStyle}>
                    Attendance
                </Link>
            )}

            {location.pathname !== "/leave" && (
                <Link to="/leave" className={linkStyle}>
                    Leave
                </Link>
            )}
        </>

    );

}

export default NavLinks;