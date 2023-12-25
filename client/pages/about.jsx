import Image from "next/image";
import parisimage from "../images/paris.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-300 h-screen text-white">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">À Propos</h1>
        <p className="text-xl mb-6">
          Bienvenue sur Carnet d'Evasion ! Nous sommes SARGHA Marwan, WADE Mamadou et TCHEUM-SIAKA Jordan, passionnés de voyages et de découvertes. Ce blog est né de mon désir de partager mes expériences et mes découvertes à travers le monde.
        </p>
        <p className="text-xl mb-6">
          Sur ce blog, vous trouverez une collection d'articles décrivant différentes destinations, avec des informations sur les lieux à visiter, les activités à faire et les expériences à vivre. Mon objectif est de vous inspirer à explorer de nouveaux endroits et à vivre des aventures inoubliables.
        </p>
        <p className="text-xl">
          Merci de me rejoindre dans cette aventure de découverte du monde !
        </p>
      </div>
      <Image
      src={parisimage}
      />

      
    </div>
  );
};

export default About;
