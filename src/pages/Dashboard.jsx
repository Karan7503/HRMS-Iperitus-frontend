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

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                HRMS Dashboard
            </h1>


            {/* SUMMARY CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white shadow-md rounded-xl p-5 border">
                    <h3 className="text-gray-500">
                        Total Employees
                    </h3>

                    <p className="text-3xl font-bold">
                        {employees.length}
                    </p>
                </div>


                <div className="bg-white shadow-md rounded-xl p-5 border">
                    <h3 className="text-gray-500">
                        Attendance Records
                    </h3>

                    <p className="text-3xl font-bold">
                        {attendance.length}
                    </p>
                </div>


                <div className="bg-white shadow-md rounded-xl p-5 border">
                    <h3 className="text-gray-500">
                        Leave Requests
                    </h3>

                    <p className="text-3xl font-bold">
                        {leaves.length}
                    </p>
                </div>

            </div>



            {/* QUICK ACTIONS */}

            <div className="mt-10">

                <h2 className="text-xl font-semibold mb-4">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    <Link
                        to="/employees"
                        className="bg-indigo-600 text-white p-5 rounded-xl shadow hover:bg-indigo-700 transition"
                    >
                        Manage Employees
                    </Link>


                    <Link
                        to="/attendance"
                        className="bg-green-600 text-white p-5 rounded-xl shadow hover:bg-green-700 transition"
                    >
                        View Attendance
                    </Link>


                    <Link
                        to="/leave"
                        className="bg-purple-600 text-white p-5 rounded-xl shadow hover:bg-purple-700 transition"
                    >
                        Manage Leave
                    </Link>

                </div>

            </div>



            {/* RECENT DATA */}

            <div className="mt-10 grid md:grid-cols-2 gap-6">


                {/* RECENT EMPLOYEES */}

                <div className="bg-white p-5 rounded-xl shadow border">

                    <h3 className="font-semibold mb-3">
                        Employees
                    </h3>

                    {

                        employees.slice(0,5).map((emp,index)=>(

                            <div key={index} className="border-b py-1">

                                {emp.name} | {emp.department}

                            </div>

                        ))

                    }

                </div>



                {/* RECENT LEAVES */}

                <div className="bg-white p-5 rounded-xl shadow border">

                    <h3 className="font-semibold mb-3">
                        Leave Requests
                    </h3>

                    {

                        leaves.slice(0,5).map((l,index)=>(

                            <div key={index} className="border-b py-1">

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