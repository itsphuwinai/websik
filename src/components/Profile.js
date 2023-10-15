import { Outlet } from "react-router-dom"

const Profile = () =>{
    return(
    <main className="pt-[4px] bg-slate-200">
      <div className="relative w-full h-[400px] mb-6 mt-10 shadow-3xl">
          <div className='absolute brightness-[.35] bg-coral2 bg-fixed w-full h-[400px]'></div>
              <h1 className="xl:text-5xl right-0 left-0 mx-auto text-center absolute z-10 text-white pt-32 font-extrabold tracking-widest md:text-7xl text-4xl">PROFILE</h1>
      </div>
        <Outlet/>
    </main>
    )
}

export default Profile