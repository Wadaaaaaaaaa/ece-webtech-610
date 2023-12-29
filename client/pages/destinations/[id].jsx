import parisimage from '../../images/paris.jpg';
import tokyoimage from '../../images/tokyo.jpg';
import londonimage from '../../images/london.jpg';
import newYorkimage from '../../images/new-york.jpg';
import Image from 'next/image';

const DestinationPage = ({ destination }) => {
  return (
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">{destination.name}</h1>
        <div className="relative bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src={destination.image}
                alt={destination.name}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white text-4xl font-bold">
                  {destination.name}
                </div>
              </div>
            </div>
            <div className="ml-4 text-white">
              <p className="text-xl font-semibold">{destination.description}</p>
            </div>
          </div>
        </div>
        {/* Autres informations sur la destination */}
      </div>
    </div>
  );
};

export default DestinationPage;

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


