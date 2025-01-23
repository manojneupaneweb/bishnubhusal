import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the "assets" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serve the index.html file
app.get("/", (req, res) => {
    res.render('index', { name: 'Manoj Neupane' });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});