import { FB, TWT, IG, YT} from "../SVG/Svg"

const Footer = () =>{
    return(
        <div className="bg-[#172554] w-full relative bottom-0">
            <div className="text-white text-sm sm:text-base lg:text-lg  flex justify-center lg:justify-between">
                <div className="mb-4 mx-6 lg:mx-12 pt-2 w-[40%] justify-center">
                    <h1>Lokasi <span className="bg-white h-[4px] w-[100px] block justify-center"></span></h1>
                    <iframe title="mapupis" className="w-[85%] pt-2 justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.03700262129!2d106.14447451407447!3d-6.1257229955645744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418adaa4f7f563%3A0x950ec58123df8596!2sUniversitas%20Pendidikan%20Indonesia%20(UPI)%20Kampus%20Serang!5e0!3m2!1sid!2sid!4v1597241203180!5m2!1sid!2sid"></iframe>
                </div>
                <div className="mb-4 mx-6 lg:mx-12 pt-2 w-[20%]">
                    <h1>Contacts<span className="bg-white h-[2px] w-[100px] block"></span></h1>
                    <h2>sik_kdserang@upi.edu</h2>
                </div>
                <div className="mb-4 mx-6 lg:mx-12 pt-2 w-[20%]">
                    <h1 className="pb-2">Follow Us <span className="bg-white h-[4px] w-[100px] block"></span></h1>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/sik_upi/"><IG/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCYkaBAojBx98my-XfoGZ9tA"><YT/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/pages/category/Education/Sistem-Informasi-Kelautan-UPI-365811034019480/"><FB/></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/sik_upi"><TWT/></a>

                </div>
                <div className="mb-4 mx-6 lg:mx-12 pt-2 w-[20%]">
                    <h1>Links<span className="bg-white h-[4px] w-[100px] block"></span></h1>
                    <a rel="noreferrer" target="_blank" href="https://student.upi.edu/"><h2>Student Portal</h2></a>
                    <a rel="noreferrer" target="_blank" href="https://spot.upi.edu/"><h2>UPI SPOT</h2></a>
                    <a rel="noreferrer" target="_blank" href="https://perpustakaan.upi.edu/"><h2>UPI Library</h2></a>
                    <a rel="noreferrer" target="_blank" href="https://www.upi.edu/"><h2>UPI Main Website</h2></a>
                    <a rel="noreferrer" target="_blank" href="https://si.upi.edu/"><h2>UPI Information System </h2></a>
                </div>
            </div>
            <div className="w-full bg-white">
                <h4 className="text-black font-bold p-4"> <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ilsamargianaa/">B Ilsa Margiana 2204771</a> </h4>

            </div>
        </div>
    )
}

export default Footer