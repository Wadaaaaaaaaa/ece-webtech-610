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

export async function getStaticPaths() {
  // Récupérez les IDs de vos destinations depuis votre source de données (Supabase, etc.)
  const destinationIds = ['1', '2', '3', '4']; // Liste des IDs

  // Générez les chemins pour les pages dynamiques
  const paths = destinationIds.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Récupérez les données de la destination en fonction de l'ID
  // Utilisez Supabase ou toute autre source de données ici
  const destinations = [
    {
      id: '1',
      name: 'Paris',
      description: "La ville de l'amour et des lumières.",
      image: parisimage
    },
    {
        id: '2',
        name: 'Tokyo',
        description: 'Vibrante métropole alliant tradition et modernité.',
        image: tokyoimage, // Chemin vers l'image de la destination
      },
      {
        id: '3',
        name: 'London',
        description: 'Riche histoire et culture captivante.',
        image: londonimage, // Chemin vers l'image de la destination
      },
      {
        id: '4',
        name: 'New York',
        description: 'La ville qui ne dort jamais.',
        image: newYorkimage, // Chemin vers l'image de la destination
      },
  ];

  const destination = destinations.find((d) => d.id === params.id);

  return {
    props: {
      destination,
    },
  };
}
