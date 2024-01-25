

import React, { useState } from 'react';
import { supabase } from '../supabase';
import Link from 'next/link';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName
          }
        }
      });

      if (error) throw error;
      alert('Check your email for verification link');
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div class="w-80 bg-gray-800 rounded-lg p-8 text-black">
      <h1 class="text-center text-4xl font-bold mb-4 text-white">Sign Up</h1>
      <form class="flex flex-col" onSubmit={handleSubmit}>
          <div class="mb-4">
              <label for="Fullname" class="text-gray-300">Nom</label>
              <input type="text"
              id="fullname"
              name="fullname"
              onChange={handleChange}  placeholder="" class="border border-gray-300 rounded-md py-2 px-3"/>
          </div>
          <div class="mb-4">
              <label for="Email" class="text-gray-300">Email</label>
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
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Sign up</button>
      </form>
      
      <p class="text-center mt-4 text-white">
          Already have an account?
          <a href="/login-native" class="text-purple-600 hover:underline"> Log in</a>
      </p>
    </div>
  </div>  
  );
};

export default SignUp;
