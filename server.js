const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para que Express entienda JSON
app.use(express.json());

// Catálogo básico de autos (nuestros datos)
const catalogoAutos = [
    { id: 1, marca: "Toyota", modelo: "Corolla", año: 2022, precio: 250000, color: "Blanco" },
    { id: 2, marca: "Honda", modelo: "Civic", año: 2023, precio: 320000, color: "Negro" },
    { id: 3, marca: "Ford", modelo: "Mustang", año: 2021, precio: 650000, color: "Rojo" },
    { id: 4, marca: "Tesla", modelo: "Model 3", año: 2024, precio: 800000, color: "Azul" }
];

// RUTA 1: Obtener todo el catálogo (GET /api/autos)
app.get('/api/autos', (req, res) => {
    res.json(catalogoAutos);
});

// RUTA 2: Obtener un auto por su ID (GET /api/autos/:id)
app.get('/api/autos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const auto = catalogoAutos.find(a => a.id === id);
    
    if (auto) {
        res.json(auto);
    } else {
        res.status(404).json({ mensaje: "Auto no encontrado" });
    }
});

// Ruta raíz para verificar que el servicio está vivo
app.get('/', (req, res) => {
    res.send('Microservicio de Catálogo de Autos funcionando correctamente. Ve a /api/autos');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});