import {Navbar,Footer} from "../components"




function Layout({children}){
  return(
    <>
      <div className="bg-gradient-to-r from-green-500 to-indigo-500 text-white text-6xl py-4 text-center font-bold">
        Carnets d'Évasion
      </div>
      <Navbar/>
        {children}
      <Footer/>
   
    </>
  )
}

export default Layout