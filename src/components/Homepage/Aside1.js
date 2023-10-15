const Aside1 = () =>{
    return(
        <div className="relative w-full h-[400px] mt-10">
                <div className='absolute brightness-[.35] bg-coral2 bg-fixed w-full h-[400px]'></div>
                <div className=" text-center text-white absolute z-10">
                    <h1 className="pb-4 md:pb-10 pt-10 xl:text-3xl font-extrabold tracking-widest md:text-2xl text-xl">Marine Information System</h1>
                    <p className="text-[12px] text-justify px-4 xl:text-xl md:text-lg ip4:text-base">The Marine Systems Information Systems Study Program is part of Marine Science which focuses on the analysis of marine data numerically and spatially to then be integrated based on information systems developed as a basis for decision-making.
                        The SIK study program’s fields consist of Marine Science, Fisheries Science, Information Systems, Geographic Information Systems, and Marine Remote Sensing and Marine Science. Besides being carried out in classrooms, learning at SIK is also carried out in laboratories, e-learning, and field studies on the coast and sea.</p>
                </div>
        </div>
    )
}

export default Aside1