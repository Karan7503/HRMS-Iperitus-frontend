import { useState, useEffect } from "react";
import API from "../../services/api";

function LeaveForm() {

  const [leaves, setLeaves] = useState([]);

  const [form, setForm] = useState({

    leave_type: "CL",
    from_date: "",
    to_date: "",
    reason: ""

  });


  const loadLeaves = async () => {

    const res = await API.get("/leave/my");

    setLeaves(res.data);

  };


  useEffect(() => {

    loadLeaves();

  }, []);



  const applyLeave = async () => {

    await API.post("/leave/apply", form);

    setForm({

      leave_type: "CL",
      from_date: "",
      to_date: "",
      reason: ""

    });

    loadLeaves();

  };



  return (

    <div className="space-y-6 text-textMain">


      {/* APPLY FORM */}

      <div className="

        bg-bgCard

        border border-borderColor

        rounded-xl

        p-5

      ">

        <h3 className="font-semibold mb-4">

          Apply Leave

        </h3>



        <div className="grid grid-cols-2 gap-3">


          <select

            className="

              border border-borderColor

              bg-bgMain

              p-2

              rounded-lg

            "

            value={form.leave_type}

            onChange={(e)=>

              setForm({

                ...form,

                leave_type:e.target.value

              })

            }

          >

            <option value="CL">Casual Leave</option>

            <option value="SL">Sick Leave</option>

            <option value="PL">Paid Leave</option>

          </select>



          <input

            type="date"

            className="

              border border-borderColor

              bg-bgMain

              p-2

              rounded-lg

            "

            value={form.from_date}

            onChange={(e)=>

              setForm({

                ...form,

                from_date:e.target.value

              })

            }

          />



          <input

            type="date"

            className="

              border border-borderColor

              bg-bgMain

              p-2

              rounded-lg

            "

            value={form.to_date}

            onChange={(e)=>

              setForm({

                ...form,

                to_date:e.target.value

              })

            }

          />



          <input

            type="text"

            placeholder="Reason"

            className="

              border border-borderColor

              bg-bgMain

              p-2

              rounded-lg

              col-span-2

            "

            value={form.reason}

            onChange={(e)=>

              setForm({

                ...form,

                reason:e.target.value

              })

            }

          />

        </div>



        <button

          onClick={applyLeave}

          className="

            mt-4

            w-full

            bg-primary

            hover:bg-primaryHover

            text-white

            py-2

            rounded-lg

            transition

          "

        >

          Submit Leave Request

        </button>

      </div>



      {/* HISTORY */}

      <div className="

        bg-bgCard

        border border-borderColor

        rounded-xl

        p-5

      ">

        <h3 className="font-semibold mb-4">

          My Leave Requests

        </h3>



        <table className="w-full text-sm">


          <thead className="bg-primarySoft">

            <tr>

              <th className="p-2 text-left">Type</th>

              <th className="p-2 text-left">From</th>

              <th className="p-2 text-left">To</th>

              <th className="p-2 text-left">Status</th>

            </tr>

          </thead>



          <tbody>

            {leaves.map((l,i)=>(

              <tr

                key={i}

                className="

                  border-b

                  border-borderColor

                  hover:bg-primarySoft

                "

              >

                <td className="p-2">

                  {l.leave_type}

                </td>


                <td className="p-2">

                  {l.from_date}

                </td>


                <td className="p-2">

                  {l.to_date}

                </td>


                <td className="p-2">

                  <span

                    className={`

                      px-2

                      py-1

                      rounded-md

                      text-xs



                      ${

                        l.status === "Approved"

                        ? "bg-primarySoft"

                        : l.status === "Rejected"

                        ? "bg-red-100 text-red-600"

                        : "bg-yellow-100 text-yellow-700"

                      }

                    `}

                  >

                    {l.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default LeaveForm;