import React, { useState } from 'react';
import { supabase } from '../supabase'; 

const AjoutDestination = ({ destinations }) => {
  const [editing, setEditing] = useState(false);
  const [libelle, setLibelle] = useState(destinations.libelle);
  const [categorie_fk, setCategorie_fk] = useState(destinations.categorie_fk);
  const [profile_dest_fk, setProfile_dest_fk] = useState(destinations.profile_dest_fk);
  const [description, setDescription] = useState(destinations.description);
  const [image, setImage] = useState(destinations.image);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImage(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  async function updateDestination() {
    try {
      const { data, error } = await supabase
        .from("destinations")
        .update({
          libelle: libelle,
          categorie_fk: categorie_fk,
          profile_dest_fk: profile_dest_fk,
          description: description,
          image: image,
        })
        .eq("id", destinations.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteDestination() {
    try {
      const { data, error } = await supabase
        .from("destinations")
        .delete()
        .eq("id", destinations.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function addDestination() {
    try {
      const { data, error } = await supabase
        .from("destinations")
        .insert([
          {
            libelle: libelle,
            categorie_fk: categorie_fk,
            profile_dest_fk: profile_dest_fk,
            description: description,
            image: image,
          },
        ]);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-4 rounded-md border border-gray-300">
      {editing === false ? (
        <>
          <h4>Adding a new destination</h4>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
            onClick={() => setEditing(false)}
          >
            Go back
          </button>
          <br />
          {}
          
          <br />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
            onClick={() => addDestination()}
          >
            Add Destination
          </button>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{destinations.libelle}</h2>
          <p className="text-gray-600">{destinations.description}</p>

          <button onClick={() => deleteDestination()} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
            Delete Destination
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
            onClick={() => setEditing(true)}
          >
            Edit Destination
          </button>
        </>
      ) : (
        <>
          <h4>Editing the destination</h4>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
            onClick={() => setEditing(false)}
          >
            Go back
          </button>
          <br />
          <div className="mb-4">
            <label htmlFor="libelle" className="font-bold block mb-2">
              Destination Name:
            </label>
            <input
              id="libelle"
              type="text"
              value={libelle}
              onChange={(e) => setLibelle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="font-bold block mb-2">
              Destination Description:
            </label>
            <textarea
              id="description"
              value={description}
              className="w-full px-3 py-2 border rounded"
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categorie_fk" className="font-bold block mb-2">
              Destination Category:
            </label>
            <input
              id="categorie_fk"
              type="text"
              value={categorie_fk}
              onChange={(e) => setCategorie_fk(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profile_dest_fk" className="font-bold block mb-2">
              User ID:
            </label>
            <input
              id="profile_dest_fk"
              type="text"
              value={profile_dest_fk}
              onChange={(e) => setProfile_dest_fk(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="font-bold block mb-2">
              Destination Image:
            </label>
            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          
          <br />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
            onClick={() => updateDestination()}
          >
            Update Destination
          </button>
        </>
      )}
    </div>
  );
};

export default AjoutDestination;
