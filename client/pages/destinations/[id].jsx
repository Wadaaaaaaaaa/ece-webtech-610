import Image from 'next/image';
import Layout from '../../Layout';

const DestinationPage = ({ destination }) => {
  return (
    <Layout>
      <div className="bg-white min-h-screen text-black">
        <div className="container mx-auto py-20">
          <h1 className="text-6xl font-bold mb-8">{destination.libelle}</h1>
          <div className="grid grid-cols-2 gap-0">
            <div className="relative bg-gray-800 p-4 ">
              <div className="relative">
                <Image
                  src={destination.image}
                  alt={destination.libelle}
                  width={700}
                  height={300}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-white text-4xl font-bold">
                    {destination.libelle}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 ">
              <p className="text-white text-xl font-semibold">
                {destination.description}
              </p>
            </div>
          </div>
          {/* Autres informations sur la destination */}
        </div>
      </div>
    </Layout>
  );
};

export default DestinationPage;

// Reste du code inchangé


export async function getStaticPaths(param) {
  const response = await fetch(`https://server-webtech-610.vercel.app/destinations`)
  const destinations = await response.json()

  return {
    paths: destinations.map( destination => `/destinations/${destination.id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`https://server-webtech-610.vercel.app/destinations/${params.id}`);
    const destination = await response.json();
    console.log('Destination data:', destination); // Ajoutez ce log pour voir la réponse obtenue

    return {
      props: {
        destination: destination || {} // Pour éviter les erreurs si la réponse est vide
      },
    };
  } catch (error) {
    console.error('Error fetching destination:', error);
    return {
      props: {
        destination: {} // Retourner une destination vide en cas d'erreur
      },
    };
  }
}


