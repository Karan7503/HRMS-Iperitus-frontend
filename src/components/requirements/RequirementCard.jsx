function RequirementCard({ data, onAction }){

  return(

    <div className="
    bg-bgMain
    border border-borderColor
    rounded-lg
    p-3
    space-y-1
    ">

      <p className="font-medium">

        {data.type} - {data.item}

      </p>


      <p className="text-sm opacity-70">

        {data.description}

      </p>


      <p className="text-xs opacity-50">

        {data.email}

      </p>


      <p className="text-sm">

        Status:

        <span className="ml-1 capitalize">

          {data.status}

        </span>

      </p>


      {

        data.status === "pending"
        &&
        onAction
        &&
        (

          <div className="flex gap-2 pt-2">

            <button

              onClick={()=>onAction(data,"approved")}

              className="px-2 py-1 bg-green-600 text-white rounded"

            >

              Approve

            </button>



            <button

              onClick={()=>onAction(data,"rejected")}

              className="px-2 py-1 bg-red-500 text-white rounded"

            >

              Reject

            </button>

          </div>

        )

      }

    </div>

  );

}

export default RequirementCard;