create database GuitarHow;
use GuitarHow;

create table contato (
idContato int primary key auto_increment,
email varchar(45),
mensagem varchar(400)
);

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(100),
senha varchar(45),
fkExperiencia int,
foreign key (fkExperiencia) references nivelExperiencia (idExperiencia)
);

create table nivelExperiencia (
idExperiencia int primary key,
nivel varchar(20),
descricao varchar(200)
);

insert into nivelExperiencia values
(1, 'Iniciante', 'Esse nível foca em desenvolver uma base sólida de habilidades técnicas e teóricas, introduzindo os alunos aos fundamentos da música.'),
(2, 'Intermediario', 'Esse nível foca em evoluir seu conhecimento com a guitarra para uma nova etapa, atingindo uma maior segurança com o instrumento.'),
(3, 'Avançado', 'Esse nível contribui para quem busca uma forma de manter seu conhecimento de teorias e tecnicas sempre consistente.');


create table pratica (
idPratica int primary key auto_increment,
hora datetime,
fkUsuario int,
acertos int
);

create table questoes (
idQuestao int primary key auto_increment,
pergunta varchar(400),
fkExperiencia int
);

create table respostas (
idResposta int primary key auto_increment,
fkQuestao int,
alternativaA varchar(45),
alternativaB varchar(45),
alternativaC varchar(45),
alternativaD varchar(45),
correta char(1)
);

insert into questoes (pergunta, fkExperiencia) values
('Qual parte da guitarra é responsável por prender as cordas no corpo do instrumento?', 1),
('Onde estão localizadas as tarraxas usadas para afinar as cordas na guitarra?', 1),
('Qual tipo de captador é conhecido por produzir um som mais cheio e potente?', 1),
('Qual é a afinação padrão da sexta corda (mais grossa) na guitarra?', 1),
('Qual item deve ser constantemente limpo para manter o brilho e funcionalidade da guitarra?', 1),
('Qual acessório é usado para alterar a afinação prendendo todas as cordas em um determinado traste?', 1),
('Qual captador combina características de single-coil e humbuckers?', 1),
('Qual guitarra tem um corpo parcialmente oco e pode ser tocada com ou sem amplificador?', 1),
('Qual afinação alternativa é conhecida por criar um som mais pesado e facilitar a execução de power chords?', 1),
('Qual parte da guitarra contém os controles e captadores?', 1);

insert into respostas (fkQuestao, alternativaA, alternativaB, alternativaC, alternativaD, correta) values
(1, 'Braço', 'Ponte', 'Headstock', 'Captadores', 'B'),
(2, 'Corpo', 'Captadores', 'Headstock', 'Chaves e Knobs', 'C'),
(3, 'Single-Coil', 'Humbucker', 'P90', 'Nenhuma das opções', 'B'),
(4, 'E (Mi)', 'A (Lá)', 'D (Ré)', 'G (Sol)', 'A'),
(5, 'Captadores', 'Cordas', 'Corpo', 'Todas as opções', 'D'),
(6, 'Afinador', 'Palheta', 'Capotraste', 'Pedal de Efeito', 'C'),
(7, 'Single-Coil', 'P90', 'Humbucker', 'Todos os anteriores', 'B'),
(8, 'Guitarra Elétrica', 'Guitarra Acústica', 'Guitarra Semiacústica', 'Nenhuma das opções acima', 'C'),
(9, 'Open G', 'Drop D', 'DADGAD', 'Padrão', 'B'),
(10, 'Braço', 'Headstock', 'Corpo', 'Ponte', 'C');

















