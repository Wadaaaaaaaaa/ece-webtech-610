
import Layout from "../Layout"

const About = () => {
  return (
    <Layout>
    <div className="bg-white h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">À Propos</h1>
        <p className="text-xl mb-6">
          Bienvenue sur Carnet d'Evasion ! Nous sommes SARGHA Marwan, WADE Mamadou et TCHUEM-SIAKA Jordan, passionnés de voyages et de découvertes.
        </p>
        <p className="text-xl mb-6">
          Sur ce blog, vous trouverez une collection d'articles décrivant différentes destinations, avec des informations sur les lieux à visiter.
        </p>
        <p className="text-xl">
            Ce site/blog est composé de la page d'accueil, de la page de contacts et de la page contenant des informations sur des villes à visiter.
          </p>
      </div>
    </div>
    </Layout>
  );
};

export default About;
