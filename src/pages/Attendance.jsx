import React, { useState, useEffect } from "react";
import API from "../services/api";

function Attendance() {

    const [records, setRecords] = useState([]);

    const markAttendance = async () => {

        await API.post("/attendance/mark", {

            check_in: "09:00",
            check_out: "18:00"

        });

        loadAttendance();

    };


    const loadAttendance = async () => {

        const res = await API.get("/attendance/my");

        setRecords(res.data);

    };


    useEffect(() => {

        loadAttendance();

    }, []);



    return (

        <div className="p-6">


            <h1 className="text-2xl font-bold mb-6">

                Attendance

            </h1>



            {/* ACTION BUTTON */}

            <button

                onClick={markAttendance}

                className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"

            >

                Mark Today Attendance

            </button>



            {/* TABLE */}

            <div className="bg-white shadow-md rounded-xl p-6 mt-6 border">


                <h2 className="text-lg font-semibold mb-4">

                    Attendance Records

                </h2>


                <table className="w-full border">


                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-2 border">

                                Date

                            </th>


                            <th className="p-2 border">

                                Check In

                            </th>


                            <th className="p-2 border">

                                Check Out

                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {

                            records.map((item, index) => (

                                <tr key={index} className="text-center">


                                    <td className="border p-2">

                                        {item.date}

                                    </td>


                                    <td className="border p-2">

                                        {item.check_in}

                                    </td>


                                    <td className="border p-2">

                                        {item.check_out}

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