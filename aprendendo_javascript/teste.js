const livros = [
    { titulo: "Homem aranha", autor: "Stan Lee", ano: 1999},
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1875 },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1880 }, 
    { titulo: "Iracema", autor: "José de Alencar", ano: 1777 }
];

function mostrarlivro(livro){
    console.log("Titulo: " + livro.titulo);
    console.log("Autor: " + livro.autor);
    console.log("Ano: " + livro.ano);
}

mostrarlivro(livros[0]);
mostrarlivro(livros[1]);
mostrarlivro(livros[2]);
