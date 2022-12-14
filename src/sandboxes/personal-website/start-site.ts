import express from 'express';
import path from 'path';

const app = express();
const port = 2281;

// Static server
app.use(express.static(path.join(__dirname, `/site`)));

// Setup an express server
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `/site/index.html`));
});

console.log(`[SANDBOX] Starting site on port ${port}...`);

app.listen(port, async () => {
    console.log(`[SANDBOX] Site up and running at http://127.0.0.1:${port}/`);
});