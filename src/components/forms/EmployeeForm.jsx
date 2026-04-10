import { useState, useEffect } from "react";
import API from "../../services/api";

function EmployeeForm() {

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


  useEffect(()=>{

    loadEmployees();

  },[]);



  const addEmployee = async () => {

    await API.post("/employees", form);

    setForm({
      name:"",
      email:"",
      department:"",
      salary:""
    });

    loadEmployees();

  };



  return (

    <div className="space-y-6 text-textMain">


      {/* ADD EMPLOYEE */}

      <div className="
        bg-bgCard
        border border-borderColor
        rounded-xl
        p-5
      ">

        <h3 className="font-semibold mb-4">

          Add Employee

        </h3>


        <div className="grid grid-cols-2 gap-3">

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            className="
              border border-borderColor
              bg-bgMain
              p-2
              rounded-lg
            "
          />


          <input
            placeholder="Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
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
            onChange={(e)=>setForm({...form,department:e.target.value})}
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
            onChange={(e)=>setForm({...form,salary:e.target.value})}
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
            w-full
            bg-primaryGradient
            text-white
            py-2
            rounded-lg
            hover:bg-primaryHover
          "
        >

          Add Employee

        </button>

      </div>



      {/* EMPLOYEE LIST */}

      <div className="
        bg-bgCard
        border border-borderColor
        rounded-xl
        p-5
      ">

        <h3 className="font-semibold mb-4">

          Employee List

        </h3>


        <table className="w-full text-sm">

          <thead className="bg-primarySoft">

            <tr>

              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Dept</th>
              <th className="p-2 text-left">Salary</th>

            </tr>

          </thead>


          <tbody>

            {employees.map((e,i)=>(

              <tr
                key={i}
                className="
                  border-b
                  border-borderColor
                  hover:bg-primarySoft
                "
              >

                <td className="p-2">{e.name}</td>
                <td className="p-2">{e.email}</td>
                <td className="p-2">{e.department}</td>
                <td className="p-2">₹ {e.salary}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default EmployeeForm;