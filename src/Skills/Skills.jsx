import Marquee from "react-fast-marquee";


const Skills = () => {
    return (
        <div className="pt-20 px-4 bg-black">
            <div className="bg-black pt-14">
                <p className="text-center font-extrabold text-4xl text-white">---- MY SKILLS ----</p>
            </div>

            <Marquee className=" ">
                <div className="grid grid-cols-3 max-w-7xl gap-6 md:gap-44 mx-auto pt-16 md:grid-cols-6">


                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-orange-500  ">
                        <p className="text-white font-bold text-center pb-4 py-2">HTML</p>

                        <div className="ml-10">
                            <div className="radial-progress text-amber-500 "
                                style={{ "--value": 95 }} role="progressbar"> 95%</div>
                        </div>
                    </div>
                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-blue-600  ">
                        <p className="text-white font-bold text-center pb-4 py-2">CSS</p>

                        <div className="ml-10">
                            <div className="radial-progress text-blue-600 "
                                style={{ "--value": 90 }} role="progressbar"> 90%</div>
                        </div>
                    </div>
                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-yellow-400  ">
                        <p className="text-white font-bold text-center pb-4 py-2">javascript</p>

                        <div className="ml-10">
                            <div className="radial-progress text-yellow-400 "
                                style={{ "--value": 70 }} role="progressbar"> 70%</div>
                        </div>
                    </div>
                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-sky-600  ">
                        <p className="text-white font-bold text-center pb-4 py-2">REACT</p>

                        <div className="ml-10">
                            <div className="radial-progress text-sky-600 "
                                style={{ "--value": 80 }} role="progressbar"> 80%</div>
                        </div>
                    </div>
                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-yellow-400  ">
                        <p className="text-white font-bold text-center pb-4 py-2">FIREBASE</p>

                        <div className="ml-10">
                            <div className="radial-progress text-yellow-400 "
                                style={{ "--value": 95 }} role="progressbar"> 95%</div>
                        </div>
                    </div>

                    <div className="w-48 h-40 p-4 mx-auto rounded-lg  shadow-xl shadow-teal-500  ">
                        <p className="text-white font-bold text-center pb-4 py-2">TAILWIND CSS</p>

                        <div className="ml-10">
                            <div className="radial-progress text-teal-500 "
                                style={{ "--value": 90 }} role="progressbar"> 90%</div>
                        </div>
                    </div>



                </div>
            </Marquee>

        </div>
    );
};

export default Skills;