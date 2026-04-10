function EmployeeSearch({ search,setSearch }){

    return(

        <input
            placeholder="Search employee..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="
                mb-4
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

export default EmployeeSearch;