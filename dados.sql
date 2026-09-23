USE crud_livros;

TRUNCATE TABLE livros;

INSERT INTO livros (titulo, autor, ano) VALUES
('Homem aranha', 'Stan Lee', 1999),
('Dom Casmurro', 'Machado de Assis', 1875),
('O Cortiço', 'Aluísio Azevedo', 1880),
('Iracema', 'José de Alencar', 1777);