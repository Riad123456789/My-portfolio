

const Navbar1 = () => {
    return (
        <nav className="  fixed w-full z-20 top-0 start-0">
            <div className="navbar lg:px-20  bg-black ">
                <div className="navbar-start ">

                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="   btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" text-white   h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="avatar border-2 rounded-full p-1">
                        <div className="w-9 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="">
                        <p
                            style={{ textTransform: "uppercase", backgroundImage: "linear-gradient(180deg, #F948B2 0%, #8758F1 100%)", color: "transparent", WebkitBackgroundClip: "text" }}
                            className="text-white sm:text-xs  lg:text-2xl pl-2 font-extrabold">Riad Jowarder </p>
                    </div>
                </div>
                <div className="navbar-end hidden gap-20  lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white ">
                        <li className="hover:text-red-600 font-serif"><a>HOME</a></li>
                        <li className="hover:text-red-600 font-serif"><a>FEATURES</a></li>
                        <li className="hover:text-red-600 font-serif"> <a>CONTACT</a></li>
                    </ul>
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-red-500/50   font-medium rounded-lg text-sm px-6 py-2 text-center me-2 font-serif  ">Hire me</button>
                </div>

            </div>
        </nav>

    );
};

export default Navbar1;