import Image from "next/image";
import parisimage from "../images/paris.jpg";
import Layout from "../Layout"

const About = () => {
  return (
    <Layout>
    <div className="bg-white h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">À Propos</h1>
        <p className="text-xl mb-6">
          Bienvenue sur Carnet d'Evasion ! Nous sommes SARGHA Marwan, WADE Mamadou et TCHEUM-SIAKA Jordan, passionnés de voyages et de découvertes.
        </p>
        <p className="text-xl mb-6">
          Sur ce blog, vous trouverez une collection d'articles décrivant différentes destinations, avec des informations sur les lieux à visiter, les activités à faire et les expériences à vivre. 
        </p>
        <p className="text-xl">
          
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default About;
