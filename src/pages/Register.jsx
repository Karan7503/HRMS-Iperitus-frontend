import { useState } from "react";
import API from "../services/api";
import logo from "../assets/IPeritusLogo.png";
import { Link, useNavigate } from "react-router-dom";

function Register(){

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"employee"
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const registerUser = async () => {

    try{

      await API.post("/auth/register", form);

      alert("Registration successful");

      navigate("/");

    }
    catch(error){

      alert("Error registering user");

    }

  };


  return(

    <div className="
    flex
    items-center
    justify-center
    min-h-[calc(100vh-4rem-3rem)]
    bg-bgMain
    ">

      <div className="
      bg-bgCard
      text-textMain
      p-8
      rounded-2xl
      shadow-xl
      w-full
      max-w-md
      border
      border-borderColor
      ">

        <img
          src={logo}
          alt="Peritus Logo"
          className="h-10 mx-auto mb-10 mt-4"
        />


        <div className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="
            w-full
            px-4 py-2
            bg-bgMain
            border
            border-borderColor
            rounded-lg
            "
          />


          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="
            w-full
            px-4 py-2
            bg-bgMain
            border
            border-borderColor
            rounded-lg
            "
          />


          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="
            w-full
            px-4 py-2
            bg-bgMain
            border
            border-borderColor
            rounded-lg
            "
          />


          <select
            name="role"
            onChange={handleChange}
            className="
            w-full
            px-4 py-2
            bg-bgMain
            border
            border-borderColor
            rounded-lg
            "
          >

            <option value="employee">
              Employee
            </option>

            <option value="admin">
              Admin
            </option>

          </select>


          <button
            onClick={registerUser}
            className="
            w-full
            py-2
            rounded-lg
            bg-primary
            hover:bg-primaryHover
            text-white
            font-semibold
            transition
            "
          >

            Register

          </button>


          <p className="text-sm text-center text-textMain/70">

            Already have account?

            <Link
              to="/"
              className="text-primary ml-1"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Register;