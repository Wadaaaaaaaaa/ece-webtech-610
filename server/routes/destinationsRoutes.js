// Importez les bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../supabaseClient';

// Assurez-vous d'importer les composants ou bibliothèques nécessaires pour votre formulaire
// Par exemple, si vous avez besoin d'un éditeur de texte, importez-le ici.

export default function Ajout() {
    const [nom, setNom] = useState(''); // Ajoutez les états nécessaires pour les champs du formulaire
    const [description, setDescription] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Mettez en place des effets secondaires si nécessaire (par exemple, chargement de données)
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Récupérez les données du formulaire
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData.entries());

        // Insérez les données dans la table des destinations
        const { data: insertData, error: insertError } = await supabase
            .from('destinations')
            .insert([formProps]);

        if (insertError) {
            console.error('Error', insertError);
        } else {
            console.log('Inserted Data', insertData);
            event.target.reset(); // Réinitialisez le formulaire après la soumission
            router.push('/destinations'); // Redirigez l'utilisateur vers la liste des destinations après l'ajout
        }
    };

    return (
        <div>
            {/* Utilisez un formulaire pour collecter les informations de destination */}
            <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                {/* Ajoutez des champs de formulaire en fonction de vos besoins */}
                <div className="mt-2.5">
                    <label htmlFor="nom" className="block text-sm font-semibold leading-6 text-gray-900">
                        Nom de la destination
                    </label>
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom de la destination"
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="mt-2.5">
                    {/* Ajoutez d'autres champs de formulaire selon les besoins */}
                    {/* Par exemple, une zone de description */}
                    <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                        Description de la destination
                    </label>
                    <textarea
                        name="description"
                        placeholder="Description de la destination"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                {/* Ajoutez d'autres champs de formulaire en fonction de vos besoins */}
                {/* Par exemple, des champs pour les images, la durée, etc. */}
                
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Ajouter la destination
                    </button>
                </div>
            </form>
        </div>
    );
}
