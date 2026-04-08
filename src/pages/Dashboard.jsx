import { useEffect, useState } from "react";
import API from "../services/api";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import QuickActions from "../components/dashboard/QuickActions";
import LeaveBalance from "../components/dashboard/LeaveBalance";
import TodoWidget from "../components/dashboard/TodoWidget";
import Announcements from "../components/dashboard/Announcements";
import PayslipWidget from "../components/dashboard/PayslipWidget";
import Birthdays from "../components/dashboard/Birthdays";

function Dashboard(){

    const [employees, setEmployees] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [leaves, setLeaves] = useState([]);

    const role = localStorage.getItem("role");

    useEffect(()=>{

        const loadData = async () => {

            const empRes = await API.get("/employees");
            setEmployees(empRes.data);

            const attRes = await API.get("/attendance/my");
            setAttendance(attRes.data);

            const leaveRes = await API.get("/leave/my");
            setLeaves(leaveRes.data);

        };

        loadData();

    },[]);


    return(

        <div className="p-6 bg-bgMain min-h-full space-y-6">

            <WelcomeCard role={role} />

            <QuickActions />

            <div className="grid md:grid-cols-2 gap-6">

                <LeaveBalance />

                <TodoWidget />

            </div>


            <div className="grid md:grid-cols-2 gap-6">

                <Announcements />

                <PayslipWidget />

            </div>


            <Birthdays />

        </div>

    );

}

export default Dashboard;