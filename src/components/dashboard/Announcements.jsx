import { useEffect, useState } from "react";
import API from "../../services/api";

function Announcements(){

  const [announcements,setAnnouncements] = useState([]);


  const loadAnnouncements = async()=>{

    const res = await API.get("/announcements");

    setAnnouncements(res.data);

  };


  useEffect(()=>{

    loadAnnouncements();

  },[]);



  return(

    <div className="
    bg-bgCard
    p-5
    rounded-xl
    border
    border-borderColor
    shadow-md
    ">

      <h3 className="font-semibold text-textMain mb-3">

        Announcements

      </h3>


      <div className="space-y-2">

        {

          announcements.map((item,index)=>(

            <div
              key={index}
              className="
              bg-bgMain
              text-textMain
              border
              border-borderColor
              rounded-lg
              p-2
              "
            >

              <p className="font-medium">

                {item.title}

              </p>


              <p className="text-sm opacity-70">

                {item.message}

              </p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Announcements;