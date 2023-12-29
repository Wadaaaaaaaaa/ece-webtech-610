import Link from 'next/link';
import Image from 'next/image';
import Layout from '../Layout';
import parisimage from '../images/paris.jpg';
import tokyoimage from '../images/tokyo.jpg';
import londonimage from '../images/london.jpg';
import newYorkimage from '../images/new-york.jpg';


const HomePage = ({ destinations }) => {
  return (
    <Layout>
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">Accueil</h1>
        <ul className="grid grid-cols-1 gap-4">
          {destinations.map((destination) => (
            <li
              key={destination.id}
              className="relative bg-gray-800 p-4 rounded-lg transition duration-300 cursor-pointer"
            >
              
                <div className="flex items-center">
                  <div className="relative">
                    <Image src={destination.image} alt={destination.name} width={500} height={300} className="rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-white text-4xl font-bold">{destination.name}</div>
                    </div>
                  </div>
                  <div className="ml-4 text-white">
                    <p className="text-xl font-semibold">{destination.description}</p>
                  </div>
                </div>
              
              {/* Autres informations sur la destination */}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Layout>
);
};
export default HomePage;
  
  
export async function getStaticProps() {
  // Exemple de données fictives pour plusieurs destinations avec images
  const destinations = [
    {
      id: '1',
      name: 'Paris',
      description: "La ville de l'amour et des lumières.",
      image: parisimage, // Chemin vers l'image de la destination
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
    // Ajoute d'autres destinations avec leur image
  ];

  return {
    props: {
      destinations,
    },
  };
}