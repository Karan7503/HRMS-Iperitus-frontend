function EmployeeRow({ emp, openEditModal, deleteEmployee }){

    return(

        <tr
            className="
                border-t border-borderColor
                hover:bg-primarySoft
                transition
            "
        >

            <td className="p-3">
                {emp.name}
            </td>


            <td className="p-3">
                {emp.email}
            </td>


            <td className="p-3">
                {emp.department}
            </td>


            <td className="p-3">
                ₹ {emp.salary}
            </td>


            <td className="p-3 flex gap-2">


                <button
                    onClick={()=>openEditModal(emp)}

                    className="
                        px-3 py-1
                        text-xs
                        rounded-md

                        border border-borderColor

                        hover:bg-primarySoft
                        transition
                    "
                >

                    Edit

                </button>



                <button
                    onClick={()=>deleteEmployee(emp.email)}

                    className="
                        px-3 py-1
                        text-xs
                        rounded-md

                        bg-primary
                        text-white

                        hover:bg-primaryHover
                        transition
                    "
                >

                    Delete

                </button>


            </td>

        </tr>

    );

}

export default EmployeeRow;