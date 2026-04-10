import { useEffect, useState } from "react";
import API from "../../services/api";

import AttendanceHeader from "../../components/admin/attendance/AttendanceHeader";
import AttendanceSearch from "../../components/admin/attendance/AttendanceSearch";
import AttendanceTable from "../../components/admin/attendance/AttendanceTable";

function ManageAttendance(){

    const [records,setRecords] = useState([]);

    const [search,setSearch] = useState("");


    useEffect(()=>{

        loadAttendance();

    },[]);



    const loadAttendance = async ()=>{

        // const res = await API.get("/attendance/all");

        // setRecords(res.data || []);
        // console.log(records)


    try{

        const res = await API.get("/attendance/all");

        console.log("API RESPONSE:", res.data);

        setRecords(Array.isArray(res.data) ? res.data : []);

    }
    catch(err){

        console.error(err);

        setRecords([]);
    }
    };



    const filteredRecords = (records || []).filter(r =>

        r?.employee_email
            ?.toLowerCase()
            .includes(search.toLowerCase())

    );



    return(

        <div className="bg-bgMain min-h-screen p-6 space-y-5">

            <AttendanceHeader/>

            <AttendanceSearch
                search={search}
                setSearch={setSearch}
            />

            <AttendanceTable
                records={filteredRecords}
            />

        </div>

    );

}

export default ManageAttendance;