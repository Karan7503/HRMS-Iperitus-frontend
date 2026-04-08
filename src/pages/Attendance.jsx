import React, { useState, useEffect } from "react";
import API from "../services/api";

function Attendance() {

    const [records, setRecords] = useState([]);
    const [today, setToday] = useState(null);

    // load all attendance
    const loadAttendance = async () => {
        const res = await API.get("/attendance/my");
        setRecords(res.data);
    };

    // load today record
    const loadToday = async () => {
        const res = await API.get("/attendance/today");
        setToday(res.data);
    };

    useEffect(() => {
        loadAttendance();
        loadToday();
    }, []);


    // check in
    const checkIn = async () => {

        const now = new Date();

        await API.post("/attendance/checkin", {
            check_in: now.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
        });

        loadAttendance();
        loadToday();
    };


    // check out
    const checkOut = async () => {

        const now = new Date();

        await API.put("/attendance/checkout", {
            check_out: now.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
        });

        loadAttendance();
        loadToday();
    };


    return (

        <div className="p-6 bg-bgMain min-h-screen text-textMain">

            <h1 className="text-2xl font-bold mb-6">
                Attendance
            </h1>


            {/* TODAY STATUS CARD */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
                mb-6
            ">

                <h2 className="text-lg font-semibold mb-3">
                    Today's Status
                </h2>


                <div className="flex gap-4 items-center">

                    {
                        !today?.check_in && (

                            <button
                                onClick={checkIn}
                                className="
                                    bg-primary
                                    hover:bg-primaryHover
                                    text-white
                                    px-5 py-2
                                    rounded-lg
                                    shadow
                                "
                            >
                                Check In
                            </button>

                        )
                    }


                    {
                        today?.check_in && !today?.check_out && (

                            <button
                                onClick={checkOut}
                                className="
                                    bg-primary
                                    hover:bg-primaryHover
                                    text-white
                                    px-5 py-2
                                    rounded-lg
                                    shadow
                                "
                            >
                                Check Out
                            </button>

                        )
                    }


                    {
                        today?.check_out && (

                            <span className="
                                px-4 py-2
                                rounded-lg
                                bg-primarySoft
                            ">
                                Completed
                            </span>

                        )
                    }

                </div>


                <div className="mt-4 text-sm">

                    <p>Check In: {today?.check_in || "--"}</p>
                    <p>Check Out: {today?.check_out || "--"}</p>

                </div>

            </div>



            {/* RECORD TABLE */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
            ">

                <h2 className="text-lg font-semibold mb-4">
                    Attendance Records
                </h2>


                <table className="w-full border border-borderColor">

                    <thead className="bg-primarySoft">

                        <tr>

                            <th className="p-2 border border-borderColor">
                                Date
                            </th>

                            <th className="p-2 border border-borderColor">
                                Check In
                            </th>

                            <th className="p-2 border border-borderColor">
                                Check Out
                            </th>

                            <th className="p-2 border border-borderColor">
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {

                            records.map((item, index) => (

                                <tr
                                    key={index}
                                    className="text-center hover:bg-primarySoft"
                                >

                                    <td className="border border-borderColor p-2">
                                        {item.date}
                                    </td>

                                    <td className="border border-borderColor p-2">
                                        {item.check_in}
                                    </td>

                                    <td className="border border-borderColor p-2">
                                        {item.check_out || "--"}
                                    </td>

                                    <td className="border border-borderColor p-2">

                                        {
                                            item.check_out
                                            ? "Completed"
                                            : "Working"
                                        }

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Attendance;