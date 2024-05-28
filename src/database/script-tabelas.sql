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
alternativaA varchar(45),
alternativaB varchar(45),
alternativaC varchar(45),
alternativaD varchar(45),
fkQuestao int
);

insert into respostas (alternativaA, alternativaB, alternativaC, alternativaD, fkQuestao) values
('AA', 'BA', 'CA', 'DA', 1),
('AB', 'BB', 'CB', 'DB', 2),
('AC', 'BC', 'CC', 'DC', 3),
('AD', 'BD', 'CD', 'DD', 4),
('AE', 'BE', 'CE', 'DE', 5),
('AF', 'BF', 'CF', 'DF', 6),
('AG', 'BG', 'CG', 'DG', 7),
('AH', 'BH', 'CH', 'DH', 8),
('AI', 'BI', 'CI', 'DI', 9),
('AJ', 'BJ', 'CJ', 'DJ', 10);

select * from respostas;

select count(idQuestao) from questoes;