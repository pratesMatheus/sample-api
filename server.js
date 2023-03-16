'use strict';

const express = require('express');
const app = express();
const port = 6543;
const data = require('./data.json');

app.use(express.json());

app.get('/clients', (req, res) => {
  res.json(data);
});

app.get('/clients/:id', (req, res) => {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if(!client) return res.status(204).json();
  
  res.json(client);
});

app.post('/clients', (req, res) => {
  const { name, email } = req.body;


  res.json({name, email});
});

app.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if(!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;
  res.json(client);
});

app.delete('/clients/:id', (req, res) => {
  const { id } = req.params;
  const clientFiltered = data.filter(client => client.id != id);


  res.json(clientFiltered);
});

app.listen(port, () => {
  console.log('Server is running');
});

/**
 * Verbos HTTP: GET (obter dados de um resource), 
 * POST (enviar dados para serem processados por um resource), 
 * PUT (atualizar um resource), 
 * DELETE (deletar um resource)
*/

/**
 * create "data.json" document
 * https://jsonplaceholder.typicode.com/users
 */