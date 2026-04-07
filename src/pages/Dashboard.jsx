import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard(){

    const [employees, setEmployees] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [leaves, setLeaves] = useState([]);

    const loadDashboardData = async () => {

        try{

            const empRes = await API.get("/employees");
            setEmployees(empRes.data);

            const attRes = await API.get("/attendance/my");
            setAttendance(attRes.data);

            const leaveRes = await API.get("/leave/my");
            setLeaves(leaveRes.data);

        }
        catch(error){

            console.log("error loading dashboard");

        }

    };

    useEffect(()=>{

        loadDashboardData();

    },[]);

    return(

        <div className="p-6 bg-bgMain min-h-full">

            <h1 className="text-2xl font-semibold text-textMain mb-6">
                HRMS Dashboard
            </h1>


            {/* SUMMARY CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                    <h3 className="text-textMain/70 text-sm">
                        Total Employees
                    </h3>

                    <p className="text-3xl font-semibold text-textMain">
                        {employees.length}
                    </p>

                </div>


                <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                    <h3 className="text-textMain/70 text-sm">
                        Attendance Records
                    </h3>

                    <p className="text-3xl font-semibold text-textMain">
                        {attendance.length}
                    </p>

                </div>


                <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                    <h3 className="text-textMain/70 text-sm">
                        Leave Requests
                    </h3>

                    <p className="text-3xl font-semibold text-textMain">
                        {leaves.length}
                    </p>

                </div>

            </div>



            {/* QUICK ACTIONS */}

            <div className="mt-10">

                <h2 className="text-xl font-semibold text-textMain mb-4">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    <Link
                        to="/employees"
                        className="
                        bg-primary
                        text-white
                        p-5
                        rounded-xl
                        shadow-sm
                        hover:bg-primaryHover
                        transition
                        text-center
                        "
                    >
                        Manage Employees
                    </Link>


                    <Link
                        to="/attendance"
                        className="
                        bg-primary
                        text-white
                        p-5
                        rounded-xl
                        shadow-sm
                        hover:bg-primaryHover
                        transition
                        text-center
                        "
                    >
                        View Attendance
                    </Link>


                    <Link
                        to="/leave"
                        className="
                        bg-primary
                        text-white
                        p-5
                        rounded-xl
                        shadow-sm
                        hover:bg-primaryHover
                        transition
                        text-center
                        "
                    >
                        Manage Leave
                    </Link>

                </div>

            </div>



            {/* RECENT DATA */}

            <div className="mt-10 grid md:grid-cols-2 gap-6">


                {/* RECENT EMPLOYEES */}

                <div className="bg-bgCard p-5 rounded-xl shadow-md border border-borderColor">

                    <h3 className="font-semibold text-textMain mb-3">
                        Employees
                    </h3>

                    {

                        employees.slice(0,5).map((emp,index)=>(

                            <div
                                key={index}
                                className="border-b border-borderColor py-2 text-textMain"
                            >

                                {emp.name} | {emp.department}

                            </div>

                        ))

                    }

                </div>



                {/* RECENT LEAVES */}

                <div className="bg-bgCard p-5 rounded-xl shadow-md border border-borderColor">

                    <h3 className="font-semibold text-textMain mb-3">
                        Leave Requests
                    </h3>

                    {

                        leaves.slice(0,5).map((l,index)=>(

                            <div
                                key={index}
                                className="border-b border-borderColor py-2 text-textMain"
                            >

                                {l.leave_type} | {l.status}

                            </div>

                        ))

                    }

                </div>


            </div>


        </div>

    );

}

export default Dashboard;