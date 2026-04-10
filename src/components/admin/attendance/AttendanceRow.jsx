function AttendanceRow({ record }){

    if(!record) return null;

    return(

        <tr
            className="
                border-t border-borderColor
                hover:bg-primarySoft
                transition
            "
        >

            <td className="p-3">
                {record.employee_email}
            </td>


            <td className="p-3">
                {record.date}
            </td>


            <td className="p-3">
                {record.check_in || "-"}
            </td>


            <td className="p-3">
                {record.check_out || "-"}
            </td>


            <td className="p-3">

                <span
                    className="
                        px-2 py-1
                        text-xs
                        rounded-full
                        bg-primarySoft
                        text-textMain
                    "
                >

                    {record.status}

                </span>

            </td>


        </tr>

    );

}

export default AttendanceRow;