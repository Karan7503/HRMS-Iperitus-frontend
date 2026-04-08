function ThemeOption({ icon, label, active, onClick }){

    return (

        <button
            onClick={onClick}
            // className={`
            //     flex
            //     flex-col
            //     items-center
            //     justify-center
            //     gap-1

            //     w-20
            //     h-20

            //     rounded-2xl

            //     transition
            //     hover:bg-primarySoft
            //     hover:scale-105

            //     ${active ? "bg-primarySoft" : ""}
            // `}

            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-1
                

                w-16
                h-16

                rounded-lg

                transition-all
                duration-150

                hover:bg-primarySoft
                hover:scale-102

                ${active ? "bg-primarySoft" : ""}
            `}
        >

            {icon}
            
            <span className="
                text-xs
                font-normal
                text-textMain
            ">
                {label}
            </span>

        </button>

    );

}

export default ThemeOption;