


export default function HomePage() {
    return (
      
      <div className="bg-white h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">Accueil</h1>
        <p className="text-2xl">Bienvenue sur notre blog de voyages et de destinations. Explorez le monde à travers nos articles et découvrez des paysages extraordinaires !</p>
            <Article titre="Article 1" >
              <p>"Contenu de l'article 1"</p>
            </Article>  
          </div>
        </div>
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