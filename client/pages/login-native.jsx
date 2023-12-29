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

  async function signInWithGithub() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      if (error) throw error;
      
      // Si la connexion réussit, redirigez l'utilisateur vers la page d'accueil
      
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    

      
    <div className="flex justify-center items-center h-screen bg-white">
      <div class="w-80 bg-gray-800 rounded-lg p-8 text-black">
        <h1 class="text-center text-4xl font-bold mb-4 text-white">Log In</h1>
        <form class="flex flex-col" onSubmit={handleSubmit}>
            <div class="mb-4">
                <label for="Email" class="text-gray-300">Email</label>
                <br></br>
                <input type="text"
                id="email"
                name="email"
                onChange={handleChange}  placeholder="" class="border border-gray-300 rounded-md py-2 px-3"/>
            </div>
            <div class="mb-4">
                <label for="Mot de passe" class="text-gray-300">Mot de passe</label>
                <input type="password"
                id="password"
                name="password"
                onChange={handleChange} placeholder="" class="border border-gray-300 rounded-md py-2 px-3"/>
                
            </div>
            <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Log in</button>
        </form>
        <div class="flex items-center mt-4">
            <div class="flex-1 h-px bg-gray-300"></div>
              <p class="text-gray-400 mx-4 text-sm">Login with social accounts</p>
            <div class="flex-1 h-px bg-gray-300"></div>
        </div>
        <div class="flex justify-center items-center mt-4 space-x-4">
            <button aria-label="Log in with GitHub" class="text-white bg-purple-600 p-2 rounded-full " onClick={signInWithGithub} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            </button>
        </div>
        <p class="text-center mt-4 text-white">
            Don't have an account?
            <a href="/signup" class="text-purple-600 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>  
  );
};

export default LoginNative;
