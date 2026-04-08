import React, { useState, useEffect } from "react";
import API from "../services/api";

function Leave() {

    const [leaves, setLeaves] = useState([]);
    const [form, setForm] = useState({
        leave_type: "CL",
        from_date: "",
        to_date: "",
        reason: ""
    });

    const loadLeaves = async () => {
        const res = await API.get("/leave/my");
        setLeaves(res.data);
    };

    useEffect(() => {
        loadLeaves();
    }, []);

    const applyLeave = async () => {
        await API.post("/leave/apply", form);
        setForm({
            leave_type: "CL",
            from_date: "",
            to_date: "",
            reason: ""
        });
        loadLeaves();
    };

    return (

        <div className="p-6 bg-bgMain min-h-screen text-textMain">

            <h1 className="text-2xl font-bold mb-6">
                Leave Management
            </h1>


            {/* APPLY LEAVE CARD */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
                mb-6
            ">

                <h2 className="text-lg font-semibold mb-4">
                    Apply Leave
                </h2>


                <div className="grid grid-cols-2 gap-4">

                    <select
                        className="border border-borderColor p-2 rounded-lg bg-bgMain"
                        value={form.leave_type}
                        onChange={(e)=>setForm({...form, leave_type:e.target.value})}
                    >
                        <option value="CL">Casual Leave</option>
                        <option value="SL">Sick Leave</option>
                        <option value="PL">Paid Leave</option>
                    </select>


                    <input
                        type="date"
                        className="border border-borderColor p-2 rounded-lg bg-bgMain"
                        value={form.from_date}
                        onChange={(e)=>setForm({...form, from_date:e.target.value})}
                    />


                    <input
                        type="date"
                        className="border border-borderColor p-2 rounded-lg bg-bgMain"
                        value={form.to_date}
                        onChange={(e)=>setForm({...form, to_date:e.target.value})}
                    />


                    <input
                        type="text"
                        placeholder="Reason"
                        className="border border-borderColor p-2 rounded-lg bg-bgMain col-span-2"
                        value={form.reason}
                        onChange={(e)=>setForm({...form, reason:e.target.value})}
                    />

                </div>


                <button
                    onClick={applyLeave}
                    className="
                        mt-4
                        bg-primary
                        hover:bg-primaryHover
                        text-white
                        px-5 py-2
                        rounded-lg
                        shadow
                        transition
                    "
                >
                    Submit Leave Request
                </button>

            </div>



            {/* LEAVE HISTORY */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
            ">

                <h2 className="text-lg font-semibold mb-4">
                    My Leave Requests
                </h2>


                <table className="w-full border border-borderColor">

                    <thead className="bg-primarySoft">

                        <tr>

                            <th className="p-2 border border-borderColor">
                                Type
                            </th>

                            <th className="p-2 border border-borderColor">
                                From
                            </th>

                            <th className="p-2 border border-borderColor">
                                To
                            </th>

                            <th className="p-2 border border-borderColor">
                                Reason
                            </th>

                            <th className="p-2 border border-borderColor">
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {leaves.map((item, index) => (

                            <tr
                                key={index}
                                className="text-center hover:bg-primarySoft"
                            >

                                <td className="border border-borderColor p-2">
                                    {item.leave_type}
                                </td>

                                <td className="border border-borderColor p-2">
                                    {item.from_date}
                                </td>

                                <td className="border border-borderColor p-2">
                                    {item.to_date}
                                </td>

                                <td className="border border-borderColor p-2">
                                    {item.reason}
                                </td>

                                <td className="border border-borderColor p-2">

                                    <span className={`
                                        px-3 py-1 rounded-full text-sm
                                        ${
                                            item.status === "Approved"
                                            ? "bg-primarySoft text-textMain"
                                            : item.status === "Rejected"
                                            ? "bg-red-100 text-red-600"
                                            : "bg-yellow-100 text-yellow-700"
                                        }
                                    `}>

                                        {item.status}

                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Leave;