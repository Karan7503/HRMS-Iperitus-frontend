import { useEffect, useState } from "react";
import API from "../../services/api";

function ManageLeave(){

    const [leaves,setLeaves] = useState([]);

    useEffect(()=>{

        loadLeaves();

    },[]);


    const loadLeaves = async ()=>{

        const res = await API.get("/leave/all");

        setLeaves(res.data);

    };


    const updateStatus = async(id,status)=>{

        await API.put(`/leave/approve/${id}`,{status});

        loadLeaves();

    };


    return(

        <div className="bg-bgMain min-h-screen p-6">

            <h2 className="text-textMain text-xl font-semibold mb-5">
                Manage Leave Requests
            </h2>

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                overflow-hidden
            ">

                <table className="w-full text-textMain">

                    <thead className="bg-primarySoft">

                        <tr className="text-sm">

                            <th className="p-3 text-left">Employee</th>
                            <th className="p-3 text-left">Type</th>
                            <th className="p-3 text-left">From</th>
                            <th className="p-3 text-left">To</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {leaves.map((l,i)=>(

                            <tr
                                key={i}
                                className="
                                    border-t border-borderColor
                                    hover:bg-primarySoft
                                    transition
                                "
                            >

                                <td className="p-3">
                                    {l.employee_email}
                                </td>

                                <td className="p-3">
                                    {l.leave_type}
                                </td>

                                <td className="p-3">
                                    {l.from_date}
                                </td>

                                <td className="p-3">
                                    {l.to_date}
                                </td>

                                <td className="p-3">

                                    <span className="
                                        px-2 py-1
                                        text-xs
                                        rounded-full
                                        bg-primarySoft
                                    ">

                                        {l.status}

                                    </span>

                                </td>

                                <td className="p-3 flex gap-2">

                                    <button
                                        onClick={()=>updateStatus(l._id,"approved")}
                                        className="
                                            px-3 py-1
                                            text-xs
                                            rounded-md

                                            bg-primary
                                            text-white

                                            hover:bg-primaryHover
                                            transition
                                        "
                                    >
                                        Approve
                                    </button>


                                    <button
                                        onClick={()=>updateStatus(l._id,"rejected")}
                                        className="
                                            px-3 py-1
                                            text-xs
                                            rounded-md

                                            border border-borderColor

                                            text-textMain

                                            hover:bg-primarySoft
                                            transition
                                        "
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default ManageLeave;