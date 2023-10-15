import Gallery from "./Homepage/Gallery";
// import Header from "./Homepage/Header";
import ProfilSIK from "./Homepage/ProfilSIK";
import CardHome from "./Homepage/Card";
import Aside1 from './Homepage/Aside1';
import Aside2 from './Homepage/Aside2';
import Caraousel from "./Carousel/Carousel";


const Homepage = () =>{
    return(
        <div className="bg-slate-200 pt-20" id="main-container">
            <Caraousel/>
            <br></br>
            <ProfilSIK/>
            <br></br>
            <br></br>
            <Aside2/>
            <br></br>
            <br></br>
            <CardHome/>
            <br></br>
            {/* <Gallery/> */}
            <br></br>
            <Aside1/>
        </div>
    )
}
export default Homepage