const express = require('express');
const app = express();
app.use(express.json());
const porta = 3000;

const livros = [
    { id: 1, titulo: "Homem aranha", autor: "Stan Lee", ano: 1999},
    { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1875 },
    { id: 3, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1880 }, 
    { id: 4, titulo: "Iracema", autor: "José de Alencar", ano: 1777 }
];

app.get('/livros', (req, res) => {
  res.json(livros);
});

app.get('/livros/:id', (req, res) => {
  const livroEncontrado = livros.find((livro) => livro.id === Number(req.params.id));
    
  if(livroEncontrado){
      res.json(livroEncontrado);
  }else{
      res.send("Livro não encontrado");
    }
});

app.post('/livros', (req, res) =>{
  
  let novoLivro = { id: livros.length + 1, titulo: req.body.titulo , autor: req.body.autor , ano: req.body.ano};

  livros.push(novoLivro);
  res.json(novoLivro);                                                                                                                                                                                                                                                                

});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});