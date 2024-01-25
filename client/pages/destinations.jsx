import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../Layout';


const ArticlesPage = ({ destinations: initialDestinations }) => {
  const [destinations, setDestinations] = useState(initialDestinations || []);

  useEffect(() => {
    // Utilise fetch ou Axios pour récupérer les données depuis ton API
    fetch('https://server-webtech-610.vercel.app/destinations')
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Layout>
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">Destinations</h1>
        <ul className="grid grid-cols-1 gap-4">
          {destinations.map((destination) => (
            <li
              key={destination.id}
              className="relative bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
            >
              <Link href={`/destinations/${destination.id}`}>
                <div className="flex items-center">
                  <div className="relative">
                    {/* Utilise Image pour afficher ton image */}
                    <img
                      src={destination.image}
                      alt={destination.name}
                      width={1000}
                      height={300}
                      
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-white text-4xl font-bold">{destination.libelle}</div>
                    </div>
                  </div>
                  <div className="ml-4 text-white">
                    <p className="text-xl font-semibold">Cliquer pour en savoir plus</p>
                  </div>
                </div>
              </Link>
              {/* Autres informations sur la destination */}
            </li>
          ))}
        </ul>
      </div>
      <button class="mb-10 block mx-auto mt-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
          <Link href="/ajout-destination">Ajouter une destination</Link>
      </button>

    </div>
    </Layout>
  );
};

export default ArticlesPage;

export async function getStaticProps() {
  // Utilise fetch ou Axios pour récupérer les données depuis ton API
  const response = await fetch('https://server-webtech-610.vercel.app/destinations/');
  const data = await response.json();

  return {
    props: {
      destinations: data,
    },
  };
}
