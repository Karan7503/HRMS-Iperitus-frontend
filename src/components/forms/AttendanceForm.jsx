import React, { useState, useEffect } from "react";
import API from "../../services/api";

function AttendanceForm() {

    const [records, setRecords] = useState([]);
    const [today, setToday] = useState(null);


    const loadAttendance = async () => {

        const res = await API.get("/attendance/my");

        setRecords(res.data);

    };


    const loadToday = async () => {

        const res = await API.get("/attendance/today");

        setToday(res.data);

    };


    useEffect(() => {

        loadAttendance();
        loadToday();

    }, []);



    const checkIn = async () => {

        const now = new Date();

        await API.post("/attendance/checkin", {

            check_in: now.toLocaleTimeString([], {

                hour: "2-digit",
                minute: "2-digit"

            })

        });

        loadAttendance();
        loadToday();

    };



    const checkOut = async () => {

        const now = new Date();

        await API.put("/attendance/checkout", {

            check_out: now.toLocaleTimeString([], {

                hour: "2-digit",
                minute: "2-digit"

            })

        });

        loadAttendance();
        loadToday();

    };



    return (

        <div className="space-y-6 text-textMain">


            {/* TODAY STATUS */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                p-5
            ">

                <h3 className="font-semibold mb-3">
                    Today
                </h3>


                <div className="flex gap-3 items-center">


                    {

                        !today?.check_in && (

                            <button
                                onClick={checkIn}
                                className="
                                bg-primary
                                hover:bg-primaryHover
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                transition
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
                                px-4
                                py-2
                                rounded-lg
                                transition
                                "
                            >

                                Check Out

                            </button>

                        )

                    }



                    {

                        today?.check_out && (

                            <span className="
                                px-3 py-1
                                rounded-md
                                bg-primarySoft
                                text-sm
                            ">

                                Completed

                            </span>

                        )

                    }

                </div>



                <div className="mt-3 text-sm opacity-80">

                    <p>
                        Check In:
                        <span className="ml-2 font-medium">
                            {today?.check_in || "--"}
                        </span>
                    </p>

                    <p>
                        Check Out:
                        <span className="ml-2 font-medium">
                            {today?.check_out || "--"}
                        </span>
                    </p>

                </div>

            </div>



            {/* HISTORY */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                p-5
            ">

                <h3 className="font-semibold mb-4">
                    History
                </h3>


                <table className="w-full text-sm">

                    <thead className="bg-primarySoft">

                        <tr>

                            <th className="p-2 text-left">
                                Date
                            </th>

                            <th className="p-2 text-left">
                                In
                            </th>

                            <th className="p-2 text-left">
                                Out
                            </th>

                            <th className="p-2 text-left">
                                Status
                            </th>

                        </tr>

                    </thead>



                    <tbody>

                        {

                            records.map((r,i)=>(

                                <tr
                                    key={i}
                                    className="
                                    border-b
                                    border-borderColor
                                    hover:bg-primarySoft
                                    "
                                >

                                    <td className="p-2">
                                        {r.date}
                                    </td>

                                    <td className="p-2">
                                        {r.check_in}
                                    </td>

                                    <td className="p-2">
                                        {r.check_out || "--"}
                                    </td>

                                    <td className="p-2">

                                        {

                                            r.check_out
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

export default AttendanceForm;