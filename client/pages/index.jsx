


export default function HomePage() {
  return(
    <>
    
    <div class="bg-gray-700 h-screen text-white">
    <h1 className="text-white font-bold underline text-6xl text-center">
      Home Page
    </h1>
    <br/>
    <br/>
    <Article titre="Article 1" >
      <p>"Contenu de l'article 1"</p>
    </Article>  
    </div>
    
    </>
  )
}


function Article({titre, children}){

  return(

    <article>
      <h2>{titre}</h2>
      {children}
    </article>
  )

}