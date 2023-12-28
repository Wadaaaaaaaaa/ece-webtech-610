import Layout from "../Layout";

const Contacts = () => {
  return (
    
      <div className="bg-white h-screen text-black">
        <div className="container mx-auto py-20">
          <h1 className="text-6xl font-bold mb-8">Contactez-nous</h1>
          <p className="text-xl mb-6">
            Vous souhaitez partager une expérience, poser une question ou simplement discuter ? N'hésitez pas à me contacter !
          </p>
          <div className="flex flex-col space-y-4">
            <p className="text-lg">
              <span className="font-bold">Email :</span> contact@tonblogvoyage.com
            </p>
            <p className="text-lg">
              <span className="font-bold">Réseaux sociaux :</span>{" "}
              <a href="https://www.facebook.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
              <a href="https://twitter.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
              <a href="https://www.instagram.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="text-lg">
              <span className="font-bold">Formulaire de contact :</span> À venir prochainement !
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Contacts;
