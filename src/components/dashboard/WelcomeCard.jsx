// function WelcomeCard({ role }) {

//   const displayRole = role || "employee";

//   return (

//     <div
//       className="

//       w-screen
//       -mt-6
//       -mx-6        /* cancel dashboard padding */

//       px-8
//       py-7

//       bg-primaryGradient
//       text-white


//       shadow-md

//       flex
//       justify-between
//       items-center
//       "
//     >

//       {/* LEFT */}
//       <div>

//         <h2 className="text-2xl font-semibold">

//           Welcome back 👋

//         </h2>


//         <p className="text-white/80 mt-1">

//           HR Management Dashboard

//         </p>


//         <span
//           className="

//           mt-4
//           inline-block

//           bg-white/20
//           border border-white/30

//           px-4
//           py-1

//           rounded-full

//           text-xs
//           font-medium

//           "

//         >

//           {displayRole.toUpperCase()}

//         </span>

//       </div>


//       {/* decorative text */}
//       <div className="hidden md:block text-6xl text-white/20 font-bold">

//         HR

//       </div>

//     </div>

//   );

// }

// export default WelcomeCard;


import { useState } from "react";

function WelcomeCard({ role, user }) {

  const displayRole = role || "employee";

  const [photo, setPhoto] = useState(
    user?.photo || null
  );

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );


  const handlePhotoUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setPhoto(imageUrl);

    }

  };


  const removePhoto = () => {

    setPhoto(null);

  };


  return (

    <div
      className="
       w-full

      bg-primaryGradient
      text-white

      rounded-2xl     /* rounded again */

      px-8
      py-7

      shadow-md

      flex
      justify-between
      items-center
      "
    >


      {/* LEFT */}
      <div>

        <h2 className="text-2xl font-semibold">

          Welcome back 👋

        </h2>


        <p className="text-white/80 mt-1">

          {user?.name || "User Name"}

        </p>


        <p className="text-white/70 text-sm mt-1">

          {today}

        </p>


        <span
          className="

          mt-4
          inline-block

          bg-white/20
          border border-white/30

          px-4
          py-1

          rounded-full

          text-xs
          font-medium

          "

        >

          {displayRole.toUpperCase()}

        </span>

      </div>



      {/* RIGHT PROFILE */}
      <div className="flex flex-col items-center gap-2">


        {/* IMAGE */}
        <div
          className="

          w-20
          h-20

          rounded-full

          bg-white/20

          flex
          items-center
          justify-center

          overflow-hidden

          border
          border-white/30

          "
        >

          {photo ? (

            <img
              src={photo}
              alt="profile"
              className="w-full h-full object-cover"
            />

          ) : (

            <span className="text-xl font-semibold">

              {user?.name?.charAt(0) || "U"}

            </span>

          )}

        </div>



        {/* ACTIONS */}
        <div className="flex gap-2 text-xs">


          <label
            className="

            cursor-pointer

            bg-white/20
            px-3
            py-1

            rounded-md

            hover:bg-white/30
            "

          >

            Edit

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />

          </label>


          {photo && (

            <button
              onClick={removePhoto}
              className="

              bg-white/20
              px-3
              py-1

              rounded-md

              hover:bg-red-400/70
              "

            >

              Remove

            </button>

          )}

        </div>

      </div>

    </div>

  );

}

export default WelcomeCard;