import Layout from "../Layout";

const Contacts = () => {
  return (
      <Layout>
      <div className="bg-white h-screen text-black">
        <div className="container mx-auto py-20">
          <h1 className="text-6xl font-bold mb-8">Contactez-nous</h1>
          <p className="text-xl mb-6">
            Vous souhaitez partager une expérience, poser une question ou simplement discuter ? N'hésitez pas à nous contacter !
          </p>
          <div className="flex flex-col space-y-4">
            
            <div className="text-lg">
              <span className="font-bold">Auteurs :</span>
              <ul className="list-disc pl-6">
                <li>
                  Marwan SARGHA, ING4-SI-06
                  <ul className="list-disc pl-6">
                    <li>email : marwan.sargha@edu.ece.fr</li>
                  </ul>
                </li>
                <li>
                  Mamadou WADE, ING4-SI-06
                  <ul className="list-disc pl-6">
                    <li>email : mamadou.wade@edu.ece.fr</li>
                  </ul>
                </li>
                <li>
                  Jordan TCHUEM-SIAKA, ING4-SI-06
                  <ul className="list-disc pl-6">
                    <li>email : jordan.tchuem-siaka@edu.ece.fr</li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="text-lg">
              <span className="font-bold">Email :</span> exampe@xyz.com
            </p>
            <p className="text-lg">
              <span className="font-bold">Réseaux sociaux :</span>{" "}
              <a href="https://www.facebook.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
              <a href="https://twitter.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
              <a href="https://www.instagram.com/tonblogvoyage" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="text-lg">
              <span className="font-bold">Formulaire de contact :</span> À venir prochainement.
            </p>
            
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default Contacts;
