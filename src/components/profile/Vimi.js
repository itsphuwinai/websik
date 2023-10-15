import { CircleB } from "../../SVG/Svg"

const Vimi = () =>{
    return(
        <main className="pt-[4px]">
     <h1 className="text-center text-xl font-bold tracking-wider">Vision and Missions</h1>

      <div className=" px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed pb-6">
        <p className="pb-2 font-semibold">Vision</p>
        <p className="pb-6">"Developing and implementing information systems to support technological advancements in the maritime field and producing competitive graduates and experts in numerical and spatial data processing.".</p>

        <p className="pb-2 font-semibold">Missions</p>
        <table>
            <tbody>
            <tr>
                <td><CircleB/></td>
                <td><p>Providing standardized education and instructional services in the field of maritime information systems.</p></td>
            </tr>
            <tr>
                <td><CircleB/></td>
                <td><p>Conducting advanced research in maritime information systems and their innovations to enhance the utilization of coastal and marine biological resources at both regional and national levels.</p></td>
            </tr>
            <tr>
                <td><CircleB/></td>
                <td><p>Implementing seamlessly integrated, productive, and quantifiable maritime information technology in the realms of education, research, service, and community engagement, all grounded in research outcomes.</p></td>
            </tr>
            <tr>
                <td><CircleB/></td>
                <td><p>Pioneering the development and widespread dissemination of maritime knowledge and technology, with a strong emphasis on meeting the evolving needs of both communities and industries.</p></td>
            </tr>
            </tbody>
        </table>
        

      </div>
    </main>
    )
}
export default Vimi