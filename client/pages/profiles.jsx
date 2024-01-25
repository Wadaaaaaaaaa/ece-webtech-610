import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../Layout';


const ArticlesPage = ({ profiles: initialprofiles }) => {
  const [profiles, setprofiles] = useState(initialprofiles || []);

  useEffect(() => {
    // Utilise fetch ou Axios pour récupérer les données depuis ton API
    fetch('https://server-webtech-610.vercel.app/profiles')
      .then((response) => response.json())
      .then((data) => {
        setprofiles(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Layout>
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">Profil</h1>
        <ul className="grid grid-cols-1 gap-4">
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="relative bg-gray-800 p-4 rounded-lg transition duration-300 cursor-pointer"
            >
              
                <div className="flex items-center">
                    
                  <div className="relative">
                        {/* Utilise Image pour afficher ton image */}
                        <Image
                        src={profile.image}
                        
                        width={500}
                        height={300}
                        className="rounded-lg"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            
                            <div className="text-white text-2xl font-bold">ID : {profile.id}</div>
                        </div>
                  </div>
                  <div className="ml-4 text-white">
                    <p className="text-xl font-semibold">Crée le :</p>
                    <p className="text-xl font-semibold">{profile.created_at}</p>
                  </div>
                </div>
              
              {/* Autres informations sur la profile */}
            </li>
          ))}
        </ul>
      </div>
      <button class="mb-10 block mx-auto mt-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
          <Link href="/homepage">Retour</Link>
      </button>

    </div>
    </Layout>
  );
};

export default ArticlesPage;

export async function getStaticProps() {
  // Utilise fetch ou Axios pour récupérer les données depuis ton API
  const response = await fetch('https://server-webtech-610.vercel.app/profiles/');
  const data = await response.json();

  return {
    props: {
      profiles: data,
    },
  };
}
