import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import du useRouter
import { supabase } from '../supabase'; 

const LoginNative = ({}) => {
  
  const router = useRouter(); // Utilisation du useRouter

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
   



    //   redirection vers homepage
    router.push('/homepage');
      
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div className="bg-gray-700 h-screen text-black flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Mot de passe:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">Sign Up
          </Link>
        </p>

        {/* Bouton de connexion avec GitHub */}
       {/*  <button
          onClick={handleGitHubLogin}
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none w-full"
        >
          Se connecter avec GitHub
        </button> */}
      </div>
    </div>
  );
};

export default LoginNative;
