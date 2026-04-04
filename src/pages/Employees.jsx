import React, { useEffect, useState } from "react";
import API from "../services/api";

function Employees() {

    const [employees, setEmployees] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    const loadEmployees = async () => {

        const res = await API.get("/employees/");

        setEmployees(res.data);

    };

    const addEmployee = async () => {

        await API.post("/employees/", {

            name,
            email,
            department,
            salary

        });

        setName("");
        setEmail("");
        setDepartment("");
        setSalary("");

        loadEmployees();

    };

    useEffect(() => {

        loadEmployees();

    }, []);



    return (

        <div className="p-6">


            <h1 className="text-2xl font-bold mb-6">
                Employees
            </h1>



            {/* ADD EMPLOYEE FORM */}

            <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">

                <h2 className="text-lg font-semibold mb-4">
                    Add Employee
                </h2>


                <div className="grid md:grid-cols-4 gap-4">


                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                    />


                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                    />


                    <input
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                    />


                    <input
                        type="text"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                    />


                </div>


                <button
                    onClick={addEmployee}
                    className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
                >
                    Add Employee
                </button>


            </div>



            {/* EMPLOYEE TABLE */}

            <div className="bg-white shadow-md rounded-xl p-6 border">

                <h2 className="text-lg font-semibold mb-4">
                    Employee List
                </h2>


                <table className="w-full border">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-2 border">
                                Name
                            </th>

                            <th className="p-2 border">
                                Email
                            </th>

                            <th className="p-2 border">
                                Department
                            </th>

                            <th className="p-2 border">
                                Salary
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {

                            employees.map((emp, index) => (

                                <tr key={index} className="text-center">

                                    <td className="border p-2">
                                        {emp.name}
                                    </td>

                                    <td className="border p-2">
                                        {emp.email}
                                    </td>

                                    <td className="border p-2">
                                        {emp.department}
                                    </td>

                                    <td className="border p-2">
                                        {emp.salary}
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