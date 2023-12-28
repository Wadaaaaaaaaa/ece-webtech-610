// destinationsRoutes.js
const express = require('express');

module.exports = (supabase) => {
    const router = express.Router();

    // Créer une nouvelle destination
    router.post('/', async (req, res) => {
        const { data, error } = await supabase
            .from('destinations')
            .insert([req.body]);

        if (error) return res.status(400).json({ error });
        res.status(201).json(data[0]);
    });

    // Obtenir toutes les destinations
    router.get('/', async (req, res) => {
        const { data, error } = await supabase
            .from('destinations')
            .select('*');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    // Mettre à jour une destination
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('destinations')
            .update(req.body)
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Supprimer une destination
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('destinations')
            .delete()
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Rechercher des destinations
    router.get('/search', async (req, res) => {
        const { query } = req.query;
        const { data, error } = await supabase
            .from('destinations')
            .select('*')
            .ilike('name', '%${query}%');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    return router;
};