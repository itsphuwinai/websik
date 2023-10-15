const ProfilSIK = () =>{
    return(
        
        <div>
            <div className="w-full h-96 mb-16 md:h-96 lg:h-[50%] group">
                    {/* <h1 className="px-6 font-bold pb-4 md:text-center lg:text-3xl lg:text-center">Profil SIK<span className="origin-left lg:origin-center lg:mx-auto md:origin-center md:mx-auto transition duration-500 group-hover:scale-x-[2.5] bg-blue-900 lg:w-[150px] w-[100px] block h-[2px]"></span></h1> */}
                    <iframe title="ytintro" className=" lg:float-left lg:clear-left w-50 xl:h-[400] md:w-[50%] md:mx-auto xl:w-[50%] xl:mx-auto h-96 md:h-96 px-5 " src="https://www.youtube.com/embed/VPIa2X1J4T8" ></iframe>
                    <div className=" hidden lg:block lg:p-6">
                        <h1 className="text-xl font-bold text-left-mt-8">Marine Information System</h1>
                        <p className="py-4 text-left">Marine Information System Program is a part of Marine Science, focusing on the analysis of marine data, both numerically and spatially, which is subsequently integrated within an information system framework. This integration serves as the foundation for decision-making. The MIS program encompasses three distinct fields of study: Fisheries and Marine Sciences, Information Systems, and Geographic Information Systems (GIS). As the first program in Indonesia to merge these three domains, it presents a unique advantage for the program. This program equips students with the knowledge and skills necessary to contribute to the responsible management and understanding of marine environments and resources.</p>
                    </div>
                </div>

                  {/* <div className="hidden lg:block w-[50%] transition -ml-[600px] -translate-x-10 lg:hover:scale-110 origin-top-right">
                    <div className="carousel__container w-[100%] rounded-xl transition  origin-top-right">
                        <Caraousel />
                    </div>
                </div> */}

                <div className="mx-4 bg-blue-400 text-white lg:hidden lg:w-[50%] p-4 lg:mt-4 rounded-md">
                    <h1 className=" text-xl font-bold text-center">Marine Information System</h1>
                    <p className="py-2">Marine Information System Program is a part of Marine Science, focusing on the analysis of marine data, both numerically and spatially, which is subsequently integrated within an information system framework. This integration serves as the foundation for decision-making. The MIS program encompasses three distinct fields of study: Fisheries and Marine Sciences, Information Systems, and Geographic Information Systems (GIS). As the first program in Indonesia to merge these three domains, it presents a unique advantage for the program. This program equips students with the knowledge and skills necessary to contribute to the responsible management and understanding of marine environments and resources.</p>
                </div>
        </div>
    )
}

export default ProfilSIK