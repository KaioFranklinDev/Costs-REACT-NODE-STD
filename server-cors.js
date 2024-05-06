const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar CORS para todas as origens
app.use(cors());


app.get('/categories', (req, res) => {

  res.json( [
  {
    "id": 1,
    "name": "Infraestrutura"
  },
  {
      "id": 2,
      "name": "Desenvolvimento"
  },    
  {
      "id": 3,
      "name": "Design"
  },
  {
      "id": 4,
      "name": "Planejamento"
  }
]);
});

// Restante do código do seu servidor Express...

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
