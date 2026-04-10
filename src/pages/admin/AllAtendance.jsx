import { useEffect, useState } from "react";

function AllAttendance() {

  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const API = "http://localhost:5000/attendance";

  // fetch attendance
  useEffect(() => {

    const fetchAttendance = async () => {

      try {

        const endpoint =
          role === "admin"
            ? `${API}/all`
            : `${API}/my`;

        const res = await fetch(endpoint, {

          headers: {
            Authorization: `Bearer ${token}`
          }

        });

        const data = await res.json();

        setRecords(data);

      } catch (err) {

        console.error(err);

      } finally {
        setLoading(false)
      }

    };


    const fetchStats = async () => {

      try {

        if (role !== "admin") return;

        const res = await fetch(`${API}/stats`, {

          headers: {
            Authorization: `Bearer ${token}`
          }

        });

        const data = await res.json();

        setStats(data);

      } catch (err) {

        console.error(err);

      }

      setLoading(false);

    };


    fetchAttendance();
    fetchStats();

  }, []);



  const formatDate = (date) => {

    return new Date(date).toLocaleDateString();

  };



  const getStatus = (record) => {

    if (!record.check_in) return "Absent";

    if (record.check_in && !record.check_out)
      return "Checked-in";

    return "Present";

  };



  if (loading)
    return (
      <div className="p-6 text-textMain">
        Loading attendance...
      </div>
    );



  return (

    <div className="p-6 space-y-6 bg-bgMain min-h-screen">

      {/* PAGE TITLE */}

      <div className="bg-primaryGradient text-white p-5 rounded-xl shadow">

        <h2 className="text-xl font-semibold">
          Attendance Records
        </h2>

        <p className="text-sm opacity-90">
          Track employee attendance and check-in history
        </p>

      </div>



      {/* ADMIN STATS */}

      {stats && (

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-bgCard border border-borderColor p-4 rounded-xl shadow">

            <p className="text-sm opacity-70">
              Present Today
            </p>

            <h3 className="text-xl font-semibold text-primary">
              {stats.todayPresent}
            </h3>

          </div>



          <div className="bg-bgCard border border-borderColor p-4 rounded-xl shadow">

            <p className="text-sm opacity-70">
              Absent Today
            </p>

            <h3 className="text-xl font-semibold">
              {stats.todayAbsent}
            </h3>

          </div>



          <div className="bg-bgCard border border-borderColor p-4 rounded-xl shadow">

            <p className="text-sm opacity-70">
              Avg Attendance
            </p>

            <h3 className="text-xl font-semibold text-primary">
              {stats.avgAttendance}%
            </h3>

          </div>

        </div>

      )}



      {/* TABLE */}

      <div className="bg-bgCard border border-borderColor rounded-xl shadow">

        <div className="p-4 border-b border-borderColor flex justify-between">

          <h3 className="font-semibold text-textMain">
            All Records
          </h3>

        </div>



        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-primarySoft">

              <tr>

                {role === "admin" && (
                  <th className="p-3 text-left">
                    Employee
                  </th>
                )}

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Check-in
                </th>

                <th className="p-3 text-left">
                  Check-out
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>



            <tbody>

              {records.map((r, i) => (

                <tr
                  key={i}
                  className="border-b border-borderColor hover:bg-primarySoft"
                >

                  {role === "admin" && (

                    <td className="p-3">
                      {r.email}
                    </td>

                  )}



                  <td className="p-3">

                    {formatDate(r.date)}

                  </td>



                  <td className="p-3">

                    {r.check_in
                      ? new Date(r.check_in)
                          .toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                          })
                      : "-"}

                  </td>



                  <td className="p-3">

                    {r.check_out
                      ? new Date(r.check_out)
                          .toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                          })
                      : "-"}

                  </td>



                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-xs
                      
                      ${
                        getStatus(r) === "Present"
                          ? "bg-primarySoft text-primary"
                          : ""
                      }

                      ${
                        getStatus(r) === "Checked-in"
                          ? "bg-yellow-100 text-yellow-700"
                          : ""
                      }

                      ${
                        getStatus(r) === "Absent"
                          ? "bg-red-100 text-red-600"
                          : ""
                      }

                      `}
                    >

                      {getStatus(r)}

                    </span>

                  </td>

                </tr>

              ))}



              {records.length === 0 && (

                <tr>

                  <td
                    colSpan="5"
                    className="p-4 text-center opacity-60"
                  >

                    No records found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default AllAttendance;