import { useEffect, useState } from "react";
import API from "../services/api";

function Leave(){

    const [leaves,setLeaves] = useState([]);

    const applyLeave = async () => {

        await API.post("/leave/apply",{

            leave_type:"CL",
            from_date:"2026-04-05",
            to_date:"2026-04-06",
            reason:"personal work"

        });

        loadLeaves();

    };

    const loadLeaves = async () => {

        const res = await API.get("/leave/my");

        setLeaves(res.data);

    };

    useEffect(()=>{

        loadLeaves();

    },[]);

    return(

        <div style={{padding:"20px"}}>

            <h2>Leave</h2>

            <button onClick={applyLeave}>
                Apply Leave
            </button>

            <hr/>

            {

                leaves.map((l,index)=>(

                    <div key={index}>

                        {l.leave_type} | {l.status}

                    </div>

                ))

            }

        </div>

    );
}

export default Leave;