import { useState } from "react"
import { ArrowDown } from "../SVG/Svg"
import { Link } from "react-router-dom"
// import logowebsik from './../../IMG/logowebsik.png'

const Nav = () =>{
    const [isClicked, setClicked] = useState(false)

    const toggleNav = ()=>{
        if (isClicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

    return(
        <section className={`${isClicked ? '[&+*]:pt-4' : null}`}>
            <div className={`sm:hidden justify-between pl-20 items-center bg-blue-800 z-20 w-full rounded-b-2xl h-16 flex ${isClicked? 'hidden' : 'fixed'}`}></div>

            <div className={`px-4 hover:cursor-pointer transition fixed right-0 top-3 sm:hidden ${isClicked ? 'z-50 right-0 fixed' : 'z-20'}`} onClick={toggleNav}>
                <span className={`block my-2 w-[28px] h-[2px] transition duration-500 origin-top-left ${isClicked? 'bg-white rotate-45' : 'bg-white'}`}></span>
                <span className={`block my-2 w-[28px] h-[2px] transition duration-500 ${isClicked? 'bg-white scale-0' : 'bg-white'}`}></span>
                <span className={`block my-2 w-[28px] h-[2px] transition duration-500 origin-bottom-left ${isClicked? 'bg-white -rotate-45' : 'bg-white'}`}></span>
            </div>

            <div className={` px-4 font-bold tracking-widest text-white transition text-xs sm:text-base fixed pt-6 z-40 sm:hidden ${isClicked? `hidden` : 'inline'}`}>Main Menu</div>

            
            <div className={`pt-4 sm:hidden fixed rounded-l-xl z-20 w-[50%] h-screen bg-blue-800 right-0 text-white ${isClicked ? null : 'hidden'}`}>
                <h1 className="text-center pr-2 pb-4 pt-2 font-bold text-xs sm:text-base tracking-widest">Main Menu</h1>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                    <Link to='/'><h1 className="p-2 hover:bg-blue-900">Home</h1></Link>
                </div>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                    <h1 className="p-2 hover:bg-blue-900">Profile<span><ArrowDown/></span></h1>
                    <div className="bg-blue-600 hidden group-hover:block">
                        <Link to='/profile/sejarah'><h2 className="hover:bg-blue-700 p-2">MIS History</h2></Link>
                        <Link to='/profile/vimi'><h2 className="hover:bg-blue-700 p-2">Vision and Mission</h2></Link>
                        <Link to='/profile/strukturorganisasi'><h2 className="hover:bg-blue-700 p-2"></h2>Organisational Structure</Link>
                        <Link to='/profile/dosen'><h2 className="hover:bg-blue-700 p-2">Lecturers</h2></Link>
                        <Link to='/profile/Akreditasi'><h2 className="hover:bg-blue-700 p-2">Accreditation</h2></Link>
                    </div>
                </div>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                    <h1 className="p-2 hover:bg-blue-900">Academic<span><ArrowDown/></span></h1>
                    <div className="bg-blue-600 hidden group-hover:block">
                        <Link to='akademik/kurikulum'> <h2 className="hover:bg-blue-700 p-2">Currriculum</h2></Link>
                    </div>
                </div>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                <Link to='/facility'><h1 className="p-2 hover:bg-blue-700">Facility</h1></Link>
                </div>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                <Link to='/facility'><h1 className="p-2 hover:bg-blue-700">FAQ</h1></Link>
                </div>

                <div className="text-center hover:[&>*]-inline hover:cursor-pointer group">
                    <a href="https://www.instagram.com/ilsamargianaa/" target='_blank' rel="noreferrer"><h1 className="p-2 hover:bg-blue-900">Himataska</h1></a>
                </div>
            </div>

            {/* md Nav */}
            <div className="sm:inline hidden fixed z-50 w-full bg-[#172554] text-white rounded-b-3xl h-16">
                <div className="flex justify-center mt-3">

                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                        <Link to='/'><h1 className="p-2 hover:bg-blue-700 rounded-xl">Home</h1></Link>
                    </div>

                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                        <h1 className="p-2 hover:bg-blue-700 rounded-t-xl">Profile<span><ArrowDown/></span></h1>
                        <div className="bg-blue-600 hidden group-hover:block">
                            <Link to='/profile/sejarah'><h2 className="hover:bg-blue-700 p-2">MIS History</h2></Link>
                            <Link to='/profile/vimi'><h2 className="hover:bg-blue-700 p-2">Vision and Mission</h2></Link>
                            <Link to='/profile/strukturorganisasi'><h2 className="hover:bg-blue-700 p-2">Organisational Structure</h2></Link>
                            {/* <Link to='/profile/dosen'><h2 className="hover:bg-blue-700 p-2">Lecturers</h2></Link> */}
                            <Link to='/profile/Akreditasi'><h2 className="hover:bg-blue-700 p-2">Accreditation</h2></Link>
                        </div>
                    </div>

                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                    <h1 className="p-2 hover:bg-blue-700 rounded-t-xl">Academic<span><ArrowDown/></span></h1>
                        <div className="bg-blue-600 hidden group-hover:block">
                            <Link to='/akademik/kurikulum'><h2 className="hover:bg-blue-700 p-2">Currriculum</h2></Link>
                            {/* <Link to='/akademik/lab'><h2 className="hover:bg-blue-700 p-2">Laboratorium</h2></Link> */}
                        </div>
                    </div>

                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                        <Link to='/facility'><h1 className="p-2 hover:bg-blue-700 rounded-xl">Facility</h1></Link>
                    </div>
                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                        <Link to='/faq'><h1 className="p-2 hover:bg-blue-700 rounded-xl">FAQ</h1></Link>
                    </div>

                    <div className="text-center hover:[&>*]-inline hover:cursor-pointer group mx-6 lg:mx-12">
                    <a href="https://www.instagram.com/ilsamargianaa/" target='_blank' rel="noreferrer"><h1 className="p-2 hover:bg-blue-700 rounded-xl">Student</h1></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Nav