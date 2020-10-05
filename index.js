const express = require('express');
const fetch = require('node-fetch');

const app = express();

// un endpoint /fox
app.get('/fox', async (req, res) => {
    // qui, derrière le rideau, se contente d'aller consommer l'API RandomFox
    const randomFox = await fetch('https://randomfox.ca/floof/').then(response => response.json());
    // et transmet simplement la réponse
    res.json(randomFox);
});


app.listen(5842, () => console.log('ok'));