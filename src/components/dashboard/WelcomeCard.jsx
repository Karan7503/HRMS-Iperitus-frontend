function WelcomeCard({ role }){

    const displayRole = role || "employee";

    return(

        <div className="
        bg-primaryGradient
        text-white
        rounded-2xl
        p-6
        flex
        justify-between
        items-center
        shadow-md
        ">

            <div>

                <h2 className="text-xl font-semibold">
                    Welcome back 👋
                </h2>

                <p className="text-white/80 text-sm">
                    HR Management Dashboard
                </p>

                <span className="
                mt-3
                inline-block
                bg-white/20
                border border-white/30
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                ">

                    {displayRole.toUpperCase()}

                </span>

            </div>

        </div>

    );

}

export default WelcomeCard;