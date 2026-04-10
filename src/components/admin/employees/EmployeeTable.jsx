import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees, openEditModal, deleteEmployee }){

    return(

        <div className="
            bg-bgCard
            border border-borderColor
            rounded-xl
            shadow-md
            overflow-hidden
        ">

            <table className="w-full text-textMain">

                <thead className="bg-primarySoft">

                    <tr>

                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Department</th>
                        <th className="p-3 text-left">Salary</th>
                        <th className="p-3 text-left">Actions</th>

                    </tr>

                </thead>


                <tbody>

                    {employees.map((emp,i)=>(

                        <EmployeeRow
                            key={i}
                            emp={emp}

                            openEditModal={openEditModal}
                            deleteEmployee={deleteEmployee}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default EmployeeTable;