


export default function HomePage() {
  return(
    <>
    <h1>Page d'Accueil</h1>
    <Article titre="Article 1" >
      <p>"Contenu de l'article 1"</p>
    </Article>  
    
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