import { Link } from "react-router-dom";

function QuickActions({ role, onMarkAttendance , onApplyLeave, onManageEmployees, onManageAttendance, onManageLeave, onRequestRequirement }){
    // console.log(onMarkAttendance)

    const employeeActions = [
        // { name:"Apply Leave", link:"/leave" },
        // { name:"Mark Attendance", link:"/attendance" },

        { name:"Mark Attendance", action:onMarkAttendance },
        { name:"Apply Leave", action:onApplyLeave },

        { name:"Request Requirement", action:onRequestRequirement },
        { name:"Profile", link:"/" }
    ];

   

    const adminActions = [
        // { name:"Add Employee", link:onManageEmployees },

        { name:"Manage Employees", action:onManageEmployees },

        { name:"Manage Attendance", action:onManageAttendance },
        { name:"Manage Leave", action:onManageLeave  }
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

                    a.action ? (

                        <button

                        key={i}

                        onClick={a.action}

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

                        </button>

                    ) : (

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

                    )

                    ))}

            </div>

        </div>

    );

}

export default QuickActions;