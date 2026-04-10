function AttendanceSearch({ search,setSearch }){

    return(

        <input

            placeholder="Search by employee email..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="

                w-full md:w-64

                px-3 py-2

                bg-bgCard

                text-textMain

                border border-borderColor

                rounded-md

            "

        />

    );

}

export default AttendanceSearch;