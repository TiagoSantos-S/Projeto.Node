const express = require('express');
const app = express();
const porta = 3000;

const livros = [
    { id: 1, titulo: "Homem aranha", autor: "Stan Lee", ano: 1999},
    { id: 2,titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1875 },
    { id: 3,titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1880 }, 
    { id: 4,titulo: "Iracema", autor: "José de Alencar", ano: 1777 }
];

app.get('/livros', (req, res) => {
  res.json(livros);
});

app.get('/livros/:id', (req, res) => {
  let livroEncontrado = null;
    for(let i = 0; i < livros.length; i = i + 1){
      if(Number(req.params.id) === livros[i].id){
        livroEncontrado = livros[i];   
      }
    }
    if(livroEncontrado != null){
      res.json(livroEncontrado);
    }else{
      res.send("Livro não encontrado");
    }
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});