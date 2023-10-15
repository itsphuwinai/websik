import galeri1 from './../../IMG/galeri1.jpg'
import galeri2 from './../../IMG/galeri2.jpg'
import galeri3 from './../../IMG/galeri3.jpg'
import galeri4 from './../../IMG/galeri4.jpg'
import galeri5 from './../../IMG/galeri5.jpg'
import galeri6 from './../../IMG/galeri6.jpg'


const Gallery = () =>{
    return(
        <div className="p-4 pt-0 group hover:cursor-default ">
                <h1 className="font-bold text-center lg:text-3xl">MIS NEWS<span className="mx-auto transition duration-500 group-hover:scale-x-[2.5] lg:w-[180px] lg:mt-2 bg-blue-900 w-[100px] block h-[2px]"></span></h1>
                
                <div className="flex flex-wrap justify-center ">
                    <img  src={galeri1} alt="" className="m-4 rounded-xl w-96"/>
                    <img  src={galeri2} alt="" className="m-4 rounded-xl w-96"/>
                    <img  src={galeri3} alt="" className="m-4 rounded-xl w-96"/>
                    <img  src={galeri4} alt="" className="m-4 rounded-xl w-96"/>
                    <img  src={galeri5} alt="" className="m-4 rounded-xl w-96"/>
                    <img  src={galeri6} alt="" className="m-4 rounded-xl w-96"/>
                </div>
        </div>
    )
}

export default Gallery