import { ArrowRight } from "../../SVG/Svg"
import {Link} from 'react-router-dom'
import info1 from './../../IMG/news1.jpg'
import info2 from './../../IMG/news2.jpeg'

const CardHome = () =>{
    return(
    <div className="lg:-mt-12">
        <h1 className="px-6 font-bold pb-4 md:text-center lg:text-4xl mt-6 text-center">MIS NEWS<span className="origin-left lg:origin-center mx-auto md:origin-center md:mx-auto transition duration-500 hover:scale-x-[2.5] bg-blue-900 lg:w-[150px] w-[100px] block h-[2px]"></span></h1>
        <div className="mt-4  md:flex md:flex-wrap justify-center">
       
                <div className=" hover:cursor-default my-2 px-4 py-6 group border border-slate-300 w-[90%] md:w-[40%] md:mx-4 mx-auto ">
                    <div class="flex items-center justify-center"> 
                    <img className="w-96 flex items-center justify-center align-center" src={info1} alt=""/>
                    </div>
                    <h1 className="font-bold">INCOMA 2: Towards the Global Maritime Axis - Registration Now Open<span className="origin-left transition duration-500 group-hover:scale-x-[2.5] bg-blue-900 w-[100px] block h-[2px]"></span></h1>
                    <p className="text-slate-600">
                    </p>
                    <Link to='/news'>
                    <button className="mt-6 px-4 rounded-lg bg-blue-400 hover:scale-105 transition border shadow-xl ring-2">Read More <span><ArrowRight/></span></button>
                    </Link>
                </div>

                <div className=" hover:cursor-default my-2 px-4 py-6 group border border-slate-300 w-[90%] md:w-[40%] md:mx-4 mx-auto ">
                    <div class="flex items-center justify-center"> 
                    <img className="w-96 flex items-center justify-center align-center" src={info2} alt=""/>
                    </div>
                    <h1 className="font-bold">Marine Information System Program at UPI Serang Announces Registration for Civil Service Candidates in 2023<span className="origin-left transition duration-500 group-hover:scale-x-[2.5] bg-blue-900 w-[100px] block h-[2px]"></span></h1>
                    <p className="text-slate-600">
                    </p>
                    <Link to='/berita'>
                    <button className="mt-6 px-4 rounded-lg bg-blue-400 hover:scale-105 transition border shadow-xl ring-2">Read More <span><ArrowRight/></span></button>
                    </Link>
                </div>
        </div>
    </div>
    )
}

export default CardHome