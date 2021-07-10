
const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

// Get root url
// app.get('/', (req, res) => {
//     readFile('./home.html', 'utf8', (err, html) => {
     
//         if (err) {
//             res.status(500).send('Some shit went whack');
//         }
     
//         res.send(html);
//     })
// });

app.get('/', async(request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('Node app available on http://localhost:3000'));
