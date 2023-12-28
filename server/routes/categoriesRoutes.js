// categoriesRoutes.js
const express = require('express');

module.exports = (supabase) => {
    const router = express.Router();

    // Créer une nouvelle catégorie
    router.post('/', async (req, res) => {
        const { data, error } = await supabase
            .from('categories')
            .insert([req.body]);

        if (error) return res.status(400).json({ error });
        res.status(201).json(data[0]);
    });

    // Obtenir toutes les catégories
    router.get('/', async (req, res) => {
        const { data, error } = await supabase
            .from('categories')
            .select('*');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    // Mettre à jour une catégorie
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('categories')
            .update(req.body)
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Supprimer une catégorie
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    return router;
};