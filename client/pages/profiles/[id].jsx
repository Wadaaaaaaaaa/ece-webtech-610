
import Image from 'next/image';
import Layout from '../../Layout';

const profilePage = ({ profile }) => {
  return (
    <Layout>
    <div className="bg-white min-h-screen text-black">
      <div className="container mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">{profile.id}</h1>
        <div className="relative bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="relative">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white text-4xl font-bold">
                  {profile.id}
                </div>
              </div>
            </div>
            <div className="ml-4 text-white">
              <p className="text-xl font-semibold">{profile.created_at}</p>
            </div>
          </div>
        </div>
        {/* Autres informations sur la profile */}
      </div>
    </div>
    </Layout>
  );
};

export default profilePage;

export async function getStaticPaths(param) {
  const response = await fetch(`https://server-webtech-610.vercel.app/profiles`)
  const profiles = await response.json()

  return {
    paths: profiles.map( profile => `/profiles/${profile.id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`https://server-webtech-610.vercel.app/profiles/${params.id}`);
    const profile = await response.json();
    console.log('profile data:', profile); // Ajoutez ce log pour voir la réponse obtenue

    return {
      props: {
        profile: profile || {} // Pour éviter les erreurs si la réponse est vide
      },
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return {
      props: {
        profile: {} // Retourner une profile vide en cas d'erreur
      },
    };
  }
}


