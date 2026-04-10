import { useEffect, useState } from "react";
import API from "../../services/api";

function AttendanceStats(){

  const [stats,setStats] = useState({
    todayPresent:0,
    todayAbsent:0,
    avgAttendance:0
  });

  useEffect(()=>{

    const loadStats = async()=>{

      try{

        const res = await API.get("/attendance/stats");

        setStats(res.data);

      }catch(err){

        console.error(err);

      }

    };

    loadStats();

  },[]);

  return(

    <div className="grid md:grid-cols-3 gap-4">

      <div className="bg-bgCard text-textMain border border-borderColor rounded-xl p-4 shadow-sm">

        <p className="text-sm opacity-70">
          Present Today
        </p>

        <h3 className="text-xl font-semibold mt-1">
          {stats.todayPresent}
        </h3>

      </div>


      <div className="bg-bgCard text-textMain border border-borderColor rounded-xl p-4 shadow-sm">

        <p className="text-sm opacity-70">
          Absent Today
        </p>

        <h3 className="text-xl font-semibold mt-1">
          {stats.todayAbsent}
        </h3>

      </div>


      <div className="bg-bgCard text-textMain border border-borderColor rounded-xl p-4 shadow-sm">

        <p className="text-sm opacity-70">
          Avg Attendance %
        </p>

        <h3 className="text-xl font-semibold mt-1">
          {stats.avgAttendance}%
        </h3>

      </div>

    </div>

  );

}

export default AttendanceStats;