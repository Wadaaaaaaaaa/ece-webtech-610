// commentairesRoutes.js
const express = require('express');

module.exports = (supabase) => {
    const router = express.Router();

    // Créer un nouveau commentaire
    router.post('/create', async (req, res) => {
        const { data, error } = await supabase
            .from('commentaires')
            .insert([req.body]);

        if (error) return res.status(400).json({ error });
        res.status(201).json(data[0]);
    });

    // Obtenir tous les commentaires
    router.get('/', async (req, res) => {
        const { data, error } = await supabase
            .from('commentaires')
            .select('*');

        if (error) return res.status(400).json({ error });
        res.json(data);
    });

    // Mettre à jour un commentaire
    router.put('/update/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('commentaires')
            .update(req.body)
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    // Supprimer un commentaire
    router.delete('/delete/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('commentaires')
            .delete()
            .eq('id', id);

        if (error) return res.status(400).json({ error });
        res.json(data[0]);
    });

    return router;
};