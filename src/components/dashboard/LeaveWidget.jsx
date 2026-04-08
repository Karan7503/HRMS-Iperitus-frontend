function LeaveWidget({ leaves }){

    return(

        <div className="bg-bgCard p-5 rounded-xl shadow-md border border-borderColor">

            <h3 className="font-semibold text-textMain mb-3">
                Leave Requests
            </h3>

            {

                leaves.slice(0,5).map((l,index)=>(

                    <div
                        key={index}
                        className="border-b border-borderColor py-2 text-textMain"
                    >

                        {l.leave_type} | {l.status}

                    </div>

                ))

            }

        </div>

    );

}

export default LeaveWidget;