// import Lvl from './../IMG/logowebsik.png'
import logoImage from '../../IMG/level.jpg';
import logoImage2 from '../../IMG/lvl2.png';

const Akre = () =>{
    return(
    <main className="pt-[4px] bg-slate-200">
      <h1 className="text-center text-3xl font-bold tracking-wider">ACCREDITATION</h1>
      {/* <div className="relative w-full h-[400px] mb-6 mt-10 shadow-3xl">
          <div className='absolute brightness-[.35] bg-coral2 bg-fixed w-full h-[400px]'></div>
        <h1 className="xl:text-9xl text-center text-white z-10 absolute mx-auto right-0 left-0 pt-32 font-extrabold tracking-widest italic md:text-7xl text-4xl">Akreditasi</h1>
      </div>
      <h1 className="text-center text-xl font-bold italic tracking-wider">Akreditasi</h1> */}
            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <h1 className="text-left text-xl font-medium tracking-wider">Marine Information System Accreditation</h1>
                <p className="pb-6"><img className='mx-auto' src={logoImage} alt=""/></p>
                <p className="pb-4 text-justify">As of 25 May 2022, the Marine Information Systems Study Program received a rating of “Good” based on the decision of the Higher Education National Accreditation Board. The rating is stated in the BAN-PT Decree No. 3220/SK/BAN-PT/Akred/S/V/2022. This accreditation is valid from 25 May 2022 – 25 May 2027.</p>
            </div>
            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <h1 className="text-left text-xl font-medium tracking-wider">Universitas Pendidikan Indonesia Accreditation</h1>
                <p className="pb-6"><img className='mx-auto' src={logoImage2} alt=""/></p>
                <p className="pb-4 text-justify">The Indonesian University of Education, as of June 27, 2022, received a rating of “Excellent” based on the decision of the Higher Education National Accreditation Board. The rating is stated in the BAN-PT Decree No. 288/SK/BAN-PT/AK-ISK/PT/VI/2022. This accreditation is valid from June 27, 2022 – December 21, 2026.</p>
            </div>
    </main>
    )
}

export default Akre

