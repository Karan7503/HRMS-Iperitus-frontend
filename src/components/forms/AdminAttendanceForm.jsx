import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminAttendanceForm() {

  const [records,setRecords] = useState([]);


  const loadAttendance = async () => {

    const res = await API.get("/attendance/all");

    setRecords(res.data);

  };


  useEffect(()=>{

    loadAttendance();

  },[]);



  const getStatus = (r) => {

    if(!r.check_in) return "Absent";

    if(r.check_in && !r.check_out) return "Working";

    return "Completed";

  };



  return (

    <div className="space-y-6 text-textMain">


      {/* HEADER */}

      <div className="
        bg-primarySoft
        rounded-lg
        p-3
        text-sm
      ">

        Manage employee attendance records

      </div>



      {/* TABLE */}

      <div className="
        bg-bgCard
        border border-borderColor
        rounded-xl
        p-5
      ">

        <h3 className="font-semibold mb-4">

          All Attendance

        </h3>



        <div className="overflow-auto max-h-[400px]">

          <table className="w-full text-sm">

            <thead className="bg-primarySoft">

              <tr>

                <th className="p-2 text-left">
                  Employee
                </th>

                <th className="p-2 text-left">
                  Date
                </th>

                <th className="p-2 text-left">
                  Check In
                </th>

                <th className="p-2 text-left">
                  Check Out
                </th>

                <th className="p-2 text-left">
                  Status
                </th>

              </tr>

            </thead>



            <tbody>

              {records.map((r,i)=>(

                <tr
                  key={i}
                  className="
                    border-b
                    border-borderColor
                    hover:bg-primarySoft
                  "
                >

                  <td className="p-2">
                    {r.email}
                  </td>

                  <td className="p-2">
                    {r.date}
                  </td>

                  <td className="p-2">
                    {r.check_in || "--"}
                  </td>

                  <td className="p-2">
                    {r.check_out || "--"}
                  </td>

                  <td className="p-2">

                    <span
                      className={`

                        px-2
                        py-1
                        rounded-md
                        text-xs

                        ${
                          getStatus(r) === "Completed"
                          ? "bg-primarySoft"
                          : getStatus(r) === "Working"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                        }

                      `}
                    >

                      {getStatus(r)}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default AdminAttendanceForm;