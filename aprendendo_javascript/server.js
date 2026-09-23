const express = require('express');
const app = express();
app.use(express.json());
const pool = require('./db');
const porta = 3000;

const livros = [
    { id: 1, titulo: "Homem aranha", autor: "Stan Lee", ano: 1999},
    { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1875 },
    { id: 3, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1880 }, 
    { id: 4, titulo: "Iracema", autor: "José de Alencar", ano: 1777 }
];

app.get('/livros', async (req, res) => {
  const [linhas] = await pool.query('SELECT * FROM livros');
  res.json(linhas);
});

app.get('/livros/:id', async (req, res) => {
  const livroEncontrado = livros.find((livro) => livro.id === Number(req.params.id));
    
  if(livroEncontrado){
      res.json(livroEncontrado);
  }else{
      res.send("Livro não encontrado\n");
    }
});

app.post('/livros', async (req, res) =>{
  
  let novoLivro = { id: livros.length + 1, titulo: req.body.titulo , autor: req.body.autor , ano: req.body.ano};

  livros.push(novoLivro);
  res.json(novoLivro);                                                                                                                                                                                                                                                                

});

app.put('/livros/:id', async (req, res) => {
  const livroEncontrado = livros.find((livro) => livro.id === Number(req.params.id));

  if(livroEncontrado){
    livroEncontrado.titulo = req.body.titulo;
    livroEncontrado.autor = req.body.autor;
    livroEncontrado.ano =  req.body.ano;
    
    res.json(livroEncontrado);
  
  }else{
    res.send("Erro ao encontrar livro\n");
  }
  
});

app.delete('/livros/:id', async (req, res) => {
  const indice = livros.findIndex((livro) => livro.id === Number(req.params.id));

  if(indice != -1){
    livros.splice(indice,1);
    res.send("Livro apagado com sucesso\n");
  }else{
    res.send("Livro não encontrado ou não existe\n");
  }

});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});