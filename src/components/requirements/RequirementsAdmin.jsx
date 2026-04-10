import { useEffect,useState } from "react";
import API from "../../services/api";

import RequirementCard from "./RequirementCard";


function RequirementsAdmin(){

  const [data,setData] = useState([]);


  const load = async()=>{

    const res = await API.get("/requirements/all");

    setData(res.data);

  };


  useEffect(()=>{

    load();

  },[]);



  const updateStatus = async(item,status)=>{

    await API.put(

      "/requirements/status",

      {

        created_at:item.created_at,
        status

      }

    );

    load();

  };



  return(

    <div className="
    bg-bgCard
    border border-borderColor
    rounded-xl
    p-5
    space-y-3
    ">

      <h2 className="font-semibold">

        Employee Requirements

      </h2>



      {

        data.length === 0
        ?
        <p className="opacity-60">

          No requests

        </p>

        :

        data.map((item)=>(

          <RequirementCard

            key={item.created_at}

            data={item}

            onAction={updateStatus}

          />

        ))

      }

    </div>

  );

}

export default RequirementsAdmin;