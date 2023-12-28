const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const destinationsRoutes = require('./routes/destinationsRoutes');

const app = express();
app.use(express.json());

// Configurez Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Utiliser les routes de destinations
app.use('/destinations', destinationsRoutes(supabase));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});