import React, { useState, useEffect } from "react";
import API from "../services/api";

function Employees() {

    const [employees, setEmployees] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    const loadEmployees = async () => {
        const res = await API.get("/employees");
        setEmployees(res.data);
    };

    useEffect(() => {
        loadEmployees();
    }, []);


    const addEmployee = async () => {

        await API.post("/employees", form);

        setForm({
            name: "",
            email: "",
            department: "",
            salary: ""
        });

        loadEmployees();
    };


    return (

        <div className="p-6 bg-bgMain min-h-screen text-textMain">

            <h1 className="text-2xl font-bold mb-6">
                Employees
            </h1>


            {/* ADD EMPLOYEE */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
                mb-6
            ">

                <h2 className="text-lg font-semibold mb-4">
                    Add Employee
                </h2>


                <div className="grid grid-cols-4 gap-4">

                    <input
                        placeholder="Name"
                        value={form.name}
                        onChange={(e)=>setForm({...form, name:e.target.value})}
                        className="
                            border border-borderColor
                            bg-bgMain
                            p-2
                            rounded-lg
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primarySoft
                        "
                    />

                    <input
                        placeholder="Email"
                        value={form.email}
                        onChange={(e)=>setForm({...form, email:e.target.value})}
                        className="
                            border border-borderColor
                            bg-bgMain
                            p-2
                            rounded-lg
                        "
                    />

                    <input
                        placeholder="Department"
                        value={form.department}
                        onChange={(e)=>setForm({...form, department:e.target.value})}
                        className="
                            border border-borderColor
                            bg-bgMain
                            p-2
                            rounded-lg
                        "
                    />

                    <input
                        placeholder="Salary"
                        value={form.salary}
                        onChange={(e)=>setForm({...form, salary:e.target.value})}
                        className="
                            border border-borderColor
                            bg-bgMain
                            p-2
                            rounded-lg
                        "
                    />

                </div>


                <button
                    onClick={addEmployee}
                    className="
                        mt-4
                        bg-primaryGradient
                        text-white
                        px-5 py-2
                        rounded-lg
                        shadow
                        hover:bg-primaryHover
                        transition
                    "
                >
                    Add Employee
                </button>

            </div>



            {/* EMPLOYEE TABLE */}

            <div className="
                bg-bgCard
                border border-borderColor
                rounded-xl
                shadow-md
                p-6
            ">

                <h2 className="text-lg font-semibold mb-4">
                    Employee List
                </h2>


                <table className="w-full border border-borderColor">

                    <thead className="bg-primarySoft">

                        <tr>

                            <th className="p-3 border border-borderColor text-left">
                                Name
                            </th>

                            <th className="p-3 border border-borderColor text-left">
                                Email
                            </th>

                            <th className="p-3 border border-borderColor text-left">
                                Department
                            </th>

                            <th className="p-3 border border-borderColor text-left">
                                Salary
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {

                            employees.map((emp, index) => (

                                <tr
                                    key={index}
                                    className="
                                        hover:bg-primarySoft
                                        transition
                                    "
                                >

                                    <td className="p-3 border border-borderColor">
                                        {emp.name}
                                    </td>

                                    <td className="p-3 border border-borderColor">
                                        {emp.email}
                                    </td>

                                    <td className="p-3 border border-borderColor">
                                        {emp.department}
                                    </td>

                                    <td className="p-3 border border-borderColor">
                                        ₹ {emp.salary}
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

export default Employees;