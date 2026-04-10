function EmployeeModal({

    form,
    setForm,

    editingEmail,

    saveEmployee,
    close

}){

    return(

        <div className="
            fixed inset-0
            bg-black/30

            flex items-center justify-center

            z-50
        ">

            <div className="
                bg-bgCard

                p-6

                rounded-xl

                shadow-lg

                w-80

                space-y-3
            ">

                <h3 className="text-textMain font-semibold">

                    {editingEmail
                        ? "Edit Employee"
                        : "Add Employee"
                    }

                </h3>


                <input
                    placeholder="Name"

                    value={form.name}

                    onChange={(e)=>setForm({

                        ...form,
                        name:e.target.value
                    })}

                    className="
                        w-full
                        p-2

                        border border-borderColor

                        rounded-md

                        bg-bgMain
                        text-textMain
                    "
                />


                <input
                    placeholder="Email"

                    value={form.email}

                    disabled={editingEmail}

                    onChange={(e)=>setForm({

                        ...form,
                        email:e.target.value
                    })}

                    className="
                        w-full
                        p-2

                        border border-borderColor

                        rounded-md

                        bg-bgMain
                        text-textMain
                    "
                />


                <input
                    placeholder="Department"

                    value={form.department}

                    onChange={(e)=>setForm({

                        ...form,
                        department:e.target.value
                    })}

                    className="
                        w-full
                        p-2

                        border border-borderColor

                        rounded-md

                        bg-bgMain
                        text-textMain
                    "
                />


                <input
                    placeholder="Salary"

                    value={form.salary}

                    onChange={(e)=>setForm({

                        ...form,
                        salary:e.target.value
                    })}

                    className="
                        w-full
                        p-2

                        border border-borderColor

                        rounded-md

                        bg-bgMain
                        text-textMain
                    "
                />


                <div className="flex justify-end gap-2">

                    <button
                        onClick={close}

                        className="
                            px-3 py-1
                            text-sm

                            border border-borderColor

                            rounded-md

                            hover:bg-primarySoft
                        "
                    >

                        Cancel

                    </button>


                    <button
                        onClick={saveEmployee}

                        className="
                            px-3 py-1
                            text-sm

                            bg-primary
                            text-white

                            rounded-md

                            hover:bg-primaryHover
                        "
                    >

                        Save

                    </button>

                </div>

            </div>

        </div>

    );

}

export default EmployeeModal;