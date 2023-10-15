//Import Packages
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'

//import css
import './App.css'
import './css/preload2.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Nav from './components/nav'

//Import Profile
import Profile from './components/Profile'
import Sejarah from './components/profile/Sejarah'
import Vimi from './components/profile/Vimi'
import StrukturO from './components/profile/StrukturO'
import Akre from './components/profile/Level'

//Import Akademik
import Akademik from './components/Akademik'
import Kurikulum from './components/Akademik/Kurikulum'
import { useEffect, useState } from 'react'



import Lab from './components/Facility'


//Import Preload
import NotFound from './components/NotFound'

//News
import News from './components/News'
import Sipil from './components/Sipil'
import Question from './components/FAQ'




function App() {
  const [preLoad, setPreLoad] = useState(true)

  let [timer, setTimer] = useState(8)

  const id = useRef(null)

  const clear = () =>{
    window.clearInterval(id.current)
    setPreLoad(false)
  }

  useEffect(()=>{
    id.current = window.setInterval(()=>{
      setTimer((timer) = timer - 1)
    }, 1000 )
  }, [])

  useEffect(()=>{
    if(timer === 0 ){
      clear()
    }
  }, [timer])

  return (
    <>
    {
     (<div>
      
      <Nav/>
    <Routes>

      <Route path='/' element={<Homepage/>}></Route>

      <Route path='/profile' element={<Profile/>}>
        <Route path='sejarah'element={<Sejarah/>}/>
        <Route path='vimi' element={<Vimi/>}/>
        <Route path='strukturorganisasi' element={<StrukturO/>}/>
        {/* <Route path='dosen' element={<Dosen/>}/> */}
        <Route path='akreditasi' element={<Akre/>}/>
      </Route>

      <Route path='/akademik' element={<Akademik/>}>
        <Route path='kurikulum' element={<Kurikulum/>}/>
        {/* <Route path='lab' element={<Lab/>}/> */}
      </Route>


      <Route path='facility' element={<Lab/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='berita' element={<Sipil/>}/>
      <Route path='faq' element={<Question/>}/>
      

      

      <Route path='/himataska'/>

      <Route path='*'element={<NotFound/>}/>

    </Routes>
      <Footer/>
    </div>)}
    </>
  )
}

export default App;
