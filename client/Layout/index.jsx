import {Navbar,Footer} from "../components"




function Layout({children}){
  return(
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-4xl py-4 text-center font-bold">
        Carnets d'Évasion
      </div>
      <Navbar/>
        {children}
      <Footer/>
   
    </>
  )
}

export default Layout