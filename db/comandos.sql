INSERT INTO tb_categoria (nm_categoria) VALUES
('Romance'),
('Mistério'),
('Ficção Científica'),
('Fantasia'),
('Suspense'),
('Não Ficção'),
('Biografia'),
('História'),
('Autoajuda'),
('Poesia'),
('Livros Infantis'),
('Livros para Adolescentes'),
('Religião e Espiritualidade'),
('Ficção Histórica'),
('Ficção Contemporânea'),
('Política'),
('Filosofia'),
('Drama'),
('Horror'),
('Humor'),
('Graphic Novels'),
('Livros Didáticos'),
('Culinária e Gastronomia'),
('Arte e Fotografia'),
('Ciência'),
('Economia'),
('Psicologia'),
('Educação'),
('Teatro'),
('Música'),
('Esportes'),
('Saúde e Bem-Estar'),
('Meio Ambiente e Sustentabilidade'),
('Viagem'),
('Direito'),
('Arquitetura'),
('Tecnologia'),
('Computação e Programação'),
('Jornalismo'),
('Marketing'),
('Relações Internacionais'),
('Arqueologia'),
('Astrologia'),
('Mitologia'),
('Matemática'),
('Física'),
('Química'),
('Biologia'),
('Medicina'),
('Enfermagem');
INSERT INTO tb_avaliacao (ds_avaliacao) VALUES
(1.0),
(2.0),
(3.0),
(4.0),
(5.0)
INSERT INTO TB_assinatura (ds_assinatura)
VALUES ('Bronze');

INSERT INTO TB_assinatura (ds_assinatura)
VALUES ('Prata');


INSERT INTO TB_assinatura (ds_assinatura)
VALUES ('Ouro');

INSERT INTO TB_assinatura (ds_assinatura)
VALUES ('Nenhuma');
INSERT INTO TB_Cliente (id_assinatura, nm_cliente, ds_telefone, ds_email, ds_cpf, ds_senha)
VALUES
(1, 'João Silva', '123456789', 'joao@email.com', '123.456.789-01', 'senha123'),
(2, 'Maria Souza', '987654321', 'maria@email.com', '987.654.321-02', 'senha456'),
(3, 'Carlos Oliveira', '555555555', 'carlos@email.com', '555.555.555-03', 'senha789');