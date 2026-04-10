import { useEffect, useState } from "react";
import API from "../../services/api";

import EmployeeRow from "../../components/admin/employees/EmployeeRow";
import EmployeeModal from "../../components/admin/employees/EmployeeModal";
import EmployeeTable from "../../components/admin/employees/EmployeeTable";
import EmployeeSearch from "../../components/admin/employees/EmployeeSearch";
import EmployeeHeader from "../../components/admin/employees/EmployeeHeader";
import WelcomeCard from "../../components/dashboard/WelcomeCard";



function ManageEmployees(){

    const [employees,setEmployees] = useState([]);
    const [search,setSearch] = useState("");

    const [showModal,setShowModal] = useState(false);

    const [form,setForm] = useState({
        name:"",
        email:"",
        department:"",
        salary:""
    });

    const [editingEmail,setEditingEmail] = useState(null);


    useEffect(()=>{

        loadEmployees();

    },[]);


    const loadEmployees = async ()=>{

        const res = await API.get("/employees");

        setEmployees(res.data);

    };


    const openAddModal = ()=>{

        setForm({
            name:"",
            email:"",
            department:"",
            salary:""
        });

        setEditingEmail(null);

        setShowModal(true);

    };


    const openEditModal = (emp)=>{

        setForm(emp);

        setEditingEmail(emp.email);

        setShowModal(true);

    };


    const saveEmployee = async ()=>{

        if(editingEmail){

            await API.put(`/employees/${editingEmail}`,form);

        }
        else{

            await API.post("/employees",form);

        }

        setShowModal(false);

        loadEmployees();

    };


    const deleteEmployee = async(email)=>{

        if(!window.confirm("Delete employee?")) return;

        await API.delete(`/employees/${email}`);

        loadEmployees();

    };


    const filteredEmployees = employees.filter(e=>

        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase())

    );


    return(

        <div className="bg-bgMain min-h-screen p-6">
           

            <EmployeeHeader openAddModal={openAddModal}/>

            <EmployeeSearch search={search} setSearch={setSearch}/>

            <EmployeeTable
                employees={filteredEmployees}
                openEditModal={openEditModal}
                deleteEmployee={deleteEmployee}
            />

            {showModal && (

                <EmployeeModal

                    form={form}
                    setForm={setForm}

                    editingEmail={editingEmail}

                    saveEmployee={saveEmployee}

                    close={()=>setShowModal(false)}

                />

            )}

        </div>

    );

}

export default ManageEmployees;