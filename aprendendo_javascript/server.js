const express = require('express');
const pool = require('./db');
const app = express();
app.use(express.json());
const porta = 3000;

app.get('/livros', async (req, res) => {
  const [linhas] = await pool.query('SELECT * FROM livros');
  res.json(linhas);
});

app.get('/livros/:id', async (req, res) => {
  const [linhas] = await pool.query('SELECT * FROM livros WHERE id = ?', [req.params.id]);

  if (linhas.length > 0) {
    res.json(linhas[0]);
  } else {
    res.send("Livro não encontrado\n");
  }
});

app.post('/livros', async (req, res) => {
  const [resultado] = await pool.query(
    'INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)',
    [req.body.titulo, req.body.autor, req.body.ano]
  );

  let novoLivro = { id: resultado.insertId, titulo: req.body.titulo, autor: req.body.autor, ano: req.body.ano };
  res.json(novoLivro);
});

app.put('/livros/:id', async (req, res) => {
  const [resultado] = await pool.query(
    'UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?',
    [req.body.titulo, req.body.autor, req.body.ano, req.params.id]
  );

  if (resultado.affectedRows > 0) {
    const [linhas] = await pool.query('SELECT * FROM livros WHERE id = ?', [req.params.id]);
    res.json(linhas[0]);
  } else {
    res.send("Erro ao encontrar livro\n");
  }
});

app.delete('/livros/:id', async (req, res) => {
  const [resultado] = await pool.query('DELETE FROM livros WHERE id = ?', [req.params.id]);

  if (resultado.affectedRows > 0) {
    res.send("Livro apagado com sucesso\n");
  } else {
    res.send("Livro não encontrado ou não existe\n");
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});