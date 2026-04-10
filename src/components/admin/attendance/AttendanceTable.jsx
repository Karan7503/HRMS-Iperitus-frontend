import AttendanceRow from "./AttendanceRow";

function AttendanceTable({ records }){

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

                        <th className="p-3 text-left">

                            Employee

                        </th>


                        <th className="p-3 text-left">

                            Date

                        </th>


                        <th className="p-3 text-left">

                            Check In

                        </th>


                        <th className="p-3 text-left">

                            Check Out

                        </th>


                        <th className="p-3 text-left">

                            Status

                        </th>


                    </tr>


                </thead>



                <tbody>

                    {(records || []).map((r,i)=>(

                        <AttendanceRow
                            key={i}
                            record={r}
                        />

                    ))}

                </tbody>


            </table>


        </div>

    );

}

export default AttendanceTable;