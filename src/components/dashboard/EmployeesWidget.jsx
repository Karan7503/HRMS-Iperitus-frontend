function EmployeesWidget({ employees }){

    return(

        <div className="bg-bgCard p-5 rounded-xl shadow-md border border-borderColor">

            <h3 className="font-semibold text-textMain mb-3">
                Employees
            </h3>

            {

                employees.slice(0,5).map((emp,index)=>(

                    <div
                        key={index}
                        className="border-b border-borderColor py-2 text-textMain"
                    >

                        {emp.name} | {emp.department}

                    </div>

                ))

            }

        </div>

    );

}

export default EmployeesWidget;