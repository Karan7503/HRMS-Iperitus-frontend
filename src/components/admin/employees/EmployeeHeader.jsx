function EmployeeHeader({ openAddModal }){

    return(

        <div className="flex justify-between items-center mb-5">

            <h2 className="text-textMain text-xl font-semibold">
                Manage Employees
            </h2>

            <button
                onClick={openAddModal}
                className="
                    bg-primary
                    text-white
                    px-4 py-2
                    rounded-md
                    hover:bg-primaryHover
                    transition
                "
            >
                + Add Employee
            </button>

        </div>

    );

}

export default EmployeeHeader;