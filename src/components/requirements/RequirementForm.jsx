import { useState } from "react";
import API from "../../services/api";

function RequirementForm({ onSuccess }){

  const [form,setForm] = useState({

    type:"IT",
    item:"",
    description:""

  });

  const [loading,setLoading] = useState(false);


  const submit = async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);

      await API.post("/requirements",form);

      setForm({

        type:"IT",
        item:"",
        description:""

      });

      if(onSuccess){

        onSuccess();

      }

    }
    catch(err){

      console.error(err);

      alert("Error submitting request");

    }
    finally{

      setLoading(false);

    }

  };


  return(

    <form
      onSubmit={submit}
      className="space-y-3"
    >

      <select
        value={form.type}
        onChange={(e)=>

          setForm({

            ...form,
            type:e.target.value

          })

        }

        className="
        w-full
        p-2
        border border-borderColor
        rounded-lg
        bg-bgMain
        "
      >

        <option value="IT">IT Requirement</option>

        <option value="Stationary">Stationary Requirement</option>

        <option value="Library">Library Requirement</option>

      </select>



      <input
        placeholder="Item name"
        value={form.item}
        onChange={(e)=>

          setForm({

            ...form,
            item:e.target.value

          })

        }

        className="
        w-full
        p-2
        border border-borderColor
        rounded-lg
        bg-bgMain
        "
        required
      />


      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e)=>

          setForm({

            ...form,
            description:e.target.value

          })

        }

        className="
        w-full
        p-2
        border border-borderColor
        rounded-lg
        bg-bgMain
        "
      />


      <button
        className="
        bg-primary
        text-white
        px-4
        py-2
        rounded-lg
        "
      >

        {

          loading
          ?
          "Submitting..."
          :
          "Submit Request"

        }

      </button>

    </form>

  );

}

export default RequirementForm;