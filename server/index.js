const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const destinationsRoutes = require('./routes/destinationsRoutes');
const commentairesRoutes = require('./routes/commentairesRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();
app.use(express.json());

// Configurez Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SERVICE_ROLE_KEY);

// Utiliser les routes de destinations
app.use('/destinations', destinationsRoutes(supabase));
app.use('/commentaires', commentairesRoutes(supabase));
app.use('/categories', categoriesRoutes(supabase));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
