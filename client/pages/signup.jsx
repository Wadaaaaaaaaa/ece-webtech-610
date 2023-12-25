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
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="mb-4 border border-gray-300 rounded-md px-3 py-2"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
          />

          <input
            className="mb-4 border border-gray-300 rounded-md px-3 py-2"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            className="mb-4 border border-gray-300 rounded-md px-3 py-2"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{' '}
          <Link href="/login-native" className="text-blue-500 hover:underline">Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
