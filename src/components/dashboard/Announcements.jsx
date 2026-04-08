function Announcements(){

    const announcements = [
        "New HR policy updated",
        "Office closed on Friday",
        "Team meeting at 3PM"
    ];

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

                {announcements.map((item,index)=>(
                    
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
                        {item}
                    </div>

                ))}

            </div>

        </div>

    );

}

export default Announcements;