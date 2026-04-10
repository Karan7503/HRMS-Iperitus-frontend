import { useEffect, useState } from "react";
import API from "../services/api";

import {
 WelcomeCard,
 QuickActions,
 LeaveBalance,
 TodoWidget,
 Announcements,
 PayslipWidget,
 Birthdays,
 MakeAnnouncement,
 AttendanceStats
} from "../components/dashboard";
import SidePopup from "../components/popup/SidePopup";

import AttendanceForm from "../components/forms/AttendanceForm";
import LeaveForm from "../components/forms/LeaveForm";
import EmployeeForm from "../components/forms/EmployeeForm";
import AdminAttendanceForm from "../components/forms/AdminAttendanceForm";
import AdminLeaveForm from "../components/forms/AdminLeaveForm";
import {RequirementsAdmin, RequirementForm} from "../components/requirements";


function Dashboard(){

    const [employees, setEmployees] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [leaves, setLeaves] = useState([]);
    const [showAttendancePopup, setShowAttendancePopup] = useState(false);
    const [showLeavePopup, setShowLeavePopup] = useState(false);
    const [showManageAttendancePopup,setShowManageAttendancePopup] = useState(false);
    const [showManageLeavePopup,setShowManageLeavePopup] = useState(false);
    const [showRequirementPopup,setShowRequirementPopup] = useState(false);

    const [showEmployeePopup,setShowEmployeePopup] = useState(false);


    const role = localStorage.getItem("role");
    console.log(localStorage.getItem("name"));
    const user = {name: localStorage.getItem("name")};

    useEffect(()=>{

        const loadData = async () => {

            try{
                

                // only admin should call employees API
                if (role === "admin") {

                    const empRes = await API.get("/employees");
                    setEmployees(empRes.data);

                }
                // const empRes = await API.get("/employees");
                // setEmployees(empRes.data);

                const attRes = await API.get("/attendance/my");
                setAttendance(attRes.data);

                const leaveRes = await API.get("/leave/my");
                setLeaves(leaveRes.data);

            }
            catch(err){

                console.error(err);

            }

        };

        loadData();

    },[]);


    return(

        <div className="p-6 bg-bgMain min-h-full space-y-6">

            {/* Welcome */}
            <WelcomeCard role={role} user={user} />

            {/* Quick Actions */}
            <QuickActions 
                role={role} 
                onMarkAttendance = {() => setShowAttendancePopup(true)}

                onApplyLeave={()=>setShowLeavePopup(true)}

                onManageEmployees={()=>setShowEmployeePopup(true)}

                onManageAttendance={()=>setShowManageAttendancePopup(true)}

                onManageLeave={()=>setShowManageLeavePopup(true)}

                onRequestRequirement={()=>setShowRequirementPopup(true)}
            />


            {/* ================= ADMIN DASHBOARD ================= */}

            {role === "admin" && (

                <>

                    {/* attendance overview */}
                    <AttendanceStats />

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* make announcement */}
                        <MakeAnnouncement />

                        <RequirementsAdmin />

                        {/* employees summary */}
                        {/* <EmployeesWidget employees={employees} /> */}

                    </div>

                </>

            )}



            {/* ================= EMPLOYEE DASHBOARD ================= */}

            {role !== "admin" && (

                <>

                    <div className="grid md:grid-cols-2 gap-6">

                        <LeaveBalance leaves={leaves} />

                        <TodoWidget />

                    </div>


                    <div className="grid md:grid-cols-2 gap-6">

                        <Announcements />

                        <PayslipWidget />

                    </div>


                    <Birthdays />

                </>

            )}
            
            {/* POPUP */}
            <SidePopup
                open={showAttendancePopup}
                onClose={() => setShowAttendancePopup(false)}
                title="Mark Attendance"
            >

                <AttendanceForm/>
            </SidePopup>


            <SidePopup
                open={showLeavePopup}
                onClose={() => setShowLeavePopup(false)}
                title="Apply Leave"
                >
                <LeaveForm/>
            </SidePopup>

            <SidePopup
                open={showEmployeePopup}
                onClose={()=>setShowEmployeePopup(false)}
                title="Manage Employees"
            >
                <EmployeeForm/>
            </SidePopup>

            <SidePopup
                open={showManageAttendancePopup}
                onClose={()=>setShowManageAttendancePopup(false)}
                title="Manage Attendance"
            >

                <AdminAttendanceForm/>

            </SidePopup>

            <SidePopup

                open={showManageLeavePopup}
                onClose={()=>setShowManageLeavePopup(false)}
                title="Manage Leave"
            >

                    <AdminLeaveForm/>

            </SidePopup>

            <SidePopup
                open={showRequirementPopup}
                onClose={()=>setShowRequirementPopup(false)}
                title="Request Requirement"
            >
                <RequirementForm/>
            </SidePopup>

        </div>

    );

}

export default Dashboard;