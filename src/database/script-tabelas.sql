create database GuitarHow;
use GuitarHow;

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(100),
senha varchar(45),
fkExperiencia int
);

select * from usuario;

create table pratica (
idPratica int primary key auto_increment,
fkUsuario int,
acertos int
);

select * from pratica;

create table questoes (
idQuestao int primary key auto_increment,
pergunta varchar(100)
);

insert into questoes (pergunta) values
('Pergunta A'),
('Pergunta B'),
('Pergunta C'),
('Pergunta D'),
('Pergunta E'),
('Pergunta F'),
('Pergunta G'),
('Pergunta H'),
('Pergunta I'),
('Pergunta J');

select * from questoes;

create table respostas (
idResposta int primary key auto_increment,
fkQuestao int,
alternativaA varchar(45),
alternativaB varchar(45),
alternativaC varchar(45),
alternativaD varchar(45),
correta char(1)
);

insert into respostas (fkQuestao, alternativaA, alternativaB, alternativaC, alternativaD, correta) values
(1, 'AA', 'BA', 'CA', 'DA', 'A'),
(2, 'AB', 'BB', 'CB', 'DB', 'A'),
(3, 'AC', 'BC', 'CC', 'DC', 'A'),
(4, 'AD', 'BD', 'CD', 'DD', 'A'),
(5, 'AE', 'BE', 'CE', 'DE', 'A'),
(6, 'AF', 'BF', 'CF', 'DF', 'A'),
(7, 'AG', 'BG', 'CG', 'DG', 'A'),
(8, 'AH', 'BH', 'CH', 'DH', 'A'),
(9, 'AI', 'BI', 'CI', 'DI', 'A'),
(10, 'AJ', 'BJ', 'CJ', 'DJ', 'A');

select * from respostas;


