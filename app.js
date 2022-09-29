let express = require('express');
const path = require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname, './public/');
app.use(express.static(publicFolderPath));

app.listen(3000, () => {
	console.log('senvidor corriendo en el puerto 3000');
});
app.get('/', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/home', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/productos', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/productos.html'));
});
app.get('/register', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/login.html'));
});
