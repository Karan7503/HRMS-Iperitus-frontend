import { Link } from "react-router-dom";

function QuickActions({ role }){

    const employeeActions = [
        { name:"Apply Leave", link:"/leave" },
        { name:"View Attendance", link:"/attendance" },
        { name:"View Payslip", link:"/" },
        { name:"Update Profile", link:"/" }
    ];

    const adminActions = [
        { name:"Add Employee", link:"/employees" },
        { name:"Manage Employees", link:"/employees" },
        { name:"View Attendance", link:"/attendance" },
        { name:"Manage Leave", link:"/leave" }
    ];

    const actions = role === "admin"
        ? adminActions
        : employeeActions;


    return(

        <div>

            <h3 className="text-textMain font-semibold mb-3">
                Quick Actions
            </h3>

            <div className="flex flex-wrap gap-3">

                {actions.map((a,i)=>(

                    <Link
                        key={i}
                        to={a.link}
                        className="
                        bg-bgCard
                        text-textMain
                        border
                        border-borderColor
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        hover:bg-primarySoft
                        transition
                        "
                    >

                        {a.name}

                    </Link>

                ))}

            </div>

        </div>

    );

}

export default QuickActions;