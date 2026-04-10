import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminLeaveForm(){

  const [leaves,setLeaves] = useState([]);


  const loadLeaves = async ()=>{

    const res = await API.get("/leave/all");

    setLeaves(res.data);

  };


  useEffect(()=>{

    loadLeaves();

  },[]);



  const getStatusStyle = (status)=>{

    if(status==="Approved")
      return "bg-primarySoft text-textMain";

    if(status==="Rejected")
      return "bg-red-100 text-red-600";

    return "bg-yellow-100 text-yellow-700";

  };



  return(

    <div className="space-y-6 text-textMain">


      {/* HEADER */}

      <div className="
        bg-primarySoft
        p-3
        rounded-lg
        text-sm
      ">

        Manage employee leave requests

      </div>



      {/* TABLE */}

      <div className="
        bg-bgCard
        border border-borderColor
        rounded-xl
        p-5
      ">

        <h3 className="font-semibold mb-4">

          Leave Requests

        </h3>



        <div className="overflow-auto max-h-[420px]">

          <table className="w-full text-sm">

            <thead className="bg-primarySoft">

              <tr>

                <th className="p-2 text-left">
                  Employee
                </th>

                <th className="p-2 text-left">
                  Type
                </th>

                <th className="p-2 text-left">
                  From
                </th>

                <th className="p-2 text-left">
                  To
                </th>

                <th className="p-2 text-left">
                  Reason
                </th>

                <th className="p-2 text-left">
                  Status
                </th>

              </tr>

            </thead>



            <tbody>

              {leaves.map((l,i)=>(

                <tr
                  key={i}
                  className="
                    border-b
                    border-borderColor
                    hover:bg-primarySoft
                  "
                >

                  <td className="p-2">
                    {l.email}
                  </td>

                  <td className="p-2">
                    {l.leave_type}
                  </td>

                  <td className="p-2">
                    {l.from_date}
                  </td>

                  <td className="p-2">
                    {l.to_date}
                  </td>

                  <td className="p-2">
                    {l.reason}
                  </td>

                  <td className="p-2">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        ${getStatusStyle(l.status)}
                      `}
                    >

                      {l.status}

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

export default AdminLeaveForm;