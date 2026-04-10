function SummaryCards({ employees = [], attendance = [], leaves = []}){

    return(

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                <h3 className="text-textMain/70 text-sm">
                    Total Employees
                </h3>

                <p className="text-3xl font-semibold text-textMain">
                    {employees.length}
                </p>

            </div>


            <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                <h3 className="text-textMain/70 text-sm">
                    Attendance Records
                </h3>

                <p className="text-3xl font-semibold text-textMain">
                    {attendance.length}
                </p>

            </div>


            <div className="bg-bgCard shadow-md rounded-xl p-5 border border-borderColor">

                <h3 className="text-textMain/70 text-sm">
                    Leave Requests
                </h3>

                <p className="text-3xl font-semibold text-textMain">
                    {leaves.length}
                </p>

            </div>

        </div>

    );

}

export default SummaryCards;