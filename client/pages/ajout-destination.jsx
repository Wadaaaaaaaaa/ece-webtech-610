
import React, { useState } from 'react';

const ajoutDestination = () => {

    const [formData, setFormData] = useState({
        libelle: '',
        categorie_fk: '',
        profile_dest_fk: '',
        image: '',
        description: '',
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.libelle]: event.target.value,
        });
      };
    
      const submitForm = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('https://client-webtech-610.vercel.app/destinations/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de la destination');
          }
    
          alert('Destination ajoutée avec succès!');
          // Réinitialiser le formulaire ou rediriger vers une autre page après l'ajout
        } catch (error) {
          console.error('Erreur:', error);
          alert('Une erreur est survenue lors de l\'ajout de la destination');
        }
      };

return (
<div class="flex flex-col items-center justify-center h-screen dark">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4">Ajouter une destination</h2>

    <form class="flex flex-wrap" onSubmit={submitForm}>
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Nom de la ville"
        name="libelle"
        onChange={handleChange}
      />
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Catégorie"
        name="categorie_fk"
        onChange={handleChange}
      />
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="User ID"
        name="profile_dest_fk"
        onChange={handleChange}
      />
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Image"
        name="image"
        onChange={handleChange}
      />
      <textarea
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Ajouter
      </button>
    </form>
  </div>
</div>

);

};
export default ajoutDestination;