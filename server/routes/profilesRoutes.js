
const express = require('express');

module.exports = (supabase) => {
    const router = express.Router();

    // Créer un nouvelle profil
    router.post('/create', async (req, res) => {
        const { data, error } = await supabase
            .from('profiles')
            .insert([req.body]);

        if (error) return res.status(400).json({ error });
        res.status(201).json(data[0]);
    });

    // Obtenir tout les profil
    router.get('/', async (req, res) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    // Mettre à jour un profil
    router.put('/update/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('profiles')
            .update(req.body)
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Supprimer un profil
    router.delete('/delete/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Rechercher des profiles
    router.get('/search', async (req, res) => {
        const { query } = req.query;
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .ilike('name', '%${query}%');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    return router;
};