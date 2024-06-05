create database GuitarHow;
use GuitarHow;

create table contato (
idContato int primary key auto_increment,
email varchar(60),
mensagem varchar(400)
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

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(60),
senha varchar(45),
fkExperiencia int,
foreign key (fkExperiencia) references nivelExperiencia (idExperiencia)
);

create table pratica (
idPratica int primary key auto_increment,
hora datetime,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario),
acertos int
);

create table questoes (
idQuestao int primary key auto_increment,
pergunta varchar(400),
fkExperiencia int,
foreign key (fkExperiencia) references nivelExperiencia (idExperiencia)
);

create table respostas (
idResposta int primary key auto_increment,
fkQuestao int,
foreign key (fkQuestao) references questoes (idQuestao),
alternativaA varchar(100),
alternativaB varchar(100),
alternativaC varchar(100),
alternativaD varchar(100),
correta char(1)
);

-- PERGUNTAS INICIANTES 
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
('Qual parte da guitarra contém os controles e captadores?', 1),
('Qual é a sequência de intervalos para formar uma escala maior?', 1),
('Quais são as notas da escala de Dó Maior?', 1),
('Qual é a diferença principal entre a escala maior e a menor natural?', 1),
('Quais são as notas da escala de Mi Menor Natural?', 1),
('Qual é a fórmula para a escala menor natural?', 1),
('Quais são as notas da escala de Sol Sustenido Menor Natural?', 1),
('Quais são as notas da escala de Ré Maior?', 1),
('Quais são as notas da escala de Fá Menor Natural?', 1),
('Quais são as notas da escala de Lá Sustenido Maior?', 1),
('Qual é a principal razão para aprender escalas', 1);

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
(10, 'Braço', 'Headstock', 'Corpo', 'Ponte', 'C'),
(11, 'T, T, S, T, T, S, T', 'T, S, T, T, S, T, T', 'T, T, T, S, T, T, S', 'T, T, S, T, T, T, S', 'D'),
(12, 'C, D, E, F, G, A, B, C', 'C, D, E, F, G, A, Bb, C', 'C, D, Eb, F, G, A, B, C', 'C, D, E, Gb, G, A, B, C', 'A'),
(13, 'A sequência de notas', 'A sequência de intervalos', 'O número de notas', 'O uso de sustenidos e bemóis', 'B'),
(14, 'E, F#, G, A, B, C, D, E', 'E, F, G#, A, B, C, D, E', 'E, F#, G, A, B, C#, D, E', 'E, F, G, A, B, C, D, E', 'A'),
(15, 'T, T, S, T, T, T, S', 'T, S, T, T, S, T, T', 'T, T, T, S, T, S, T', 'T, T, S, T, S, T, T', 'B'),
(16, 'G#, A#, C, C#, D#, F, G', 'G#, A, B, C#, D, E, F#', 'G#, A#, B, C#, D#, E, F#', 'G#, A#, B, C#, D#, E, F#, G#', 'D'),
(17, 'D, E, F, G, A, B, C, D', 'D, E, F#, G, A, B, C#, D', 'D, E, F#, G, A, Bb, C#, D', 'D, E, F, G, A, Bb, C, D', 'B'),
(18, 'F, G, A, Bb, C, D, E', 'F, G, Ab, Bb, C, Db, Eb', 'F, G, A, Bb, C, Db, Eb', 'F, G, Ab, Bb, C, Db, E', 'B'),
(19, 'A#, B, C#, D#, E, F#, G', 'A#, B#, C##, D#, E#, F##, G##, A#', 'A#, B#, C, D#, E, F, G', 'A#, B#, C#, D#, E, F, G', 'B'),
(20, 'Melhorar a leitura musical', 'Ajudar na improvisação, composição e compreensão musical', 'Facilitar o aprendizado de acordes complexos', 'Aumentar a velocidade ao tocar guitarra', 'B');

-- PERGUNTAS INTERMEDIARIAS 
insert into questoes (pergunta, fkExperiencia) values
('Qual é a composição de um acorde maior?', 2),
('Quais são as notas do acorde de Dó Maior (C)?', 2),
('Qual é a diferença entre um acorde maior e um menor?', 2),
('Quais são as notas do acorde de Lá Menor (Am)?', 2),
('O que caracteriza um acorde diminuto?', 2),
('Quais são as notas do acorde de Sol Sétima (G7)?', 2),
('Qual é a composição de um acorde menor?', 2),
('Quais são as notas do acorde de Mi Maior (E)?', 2),
('O que caracteriza um acorde aumentado?', 2),
('Quais são as notas do acorde de Ré Menor (Dm)?', 2),
('O que é um campo harmônico?', 2),
('Qual é o campo harmônico maior de Dó (C)?', 2),
('Qual é o grau correspondente ao acorde dominante em um campo harmônico maior?', 2),
('Quais são os acordes do campo harmônico maior de Sol (G)?', 2),
('Qual é o acorde correspondente ao segundo grau no campo harmônico de Ré Maior (D)?', 2),
('Qual é o grau correspondente ao acorde subdominante em um campo harmônico maior?', 2),
('Quais são os acordes do campo harmônico menor de Lá (Am)?', 2),
('Qual é o acorde correspondente ao quinto grau no campo harmônico menor natural?', 2),
('Qual é o campo harmônico maior de Fá (F)?', 2),
('Qual é o acorde correspondente ao sexto grau no campo harmônico de Mi Maior (E)?', 2);

insert into respostas (fkQuestao, alternativaA, alternativaB, alternativaC, alternativaD, correta) values
(21, 'Tônica, terça menor e quinta justa', 'Tônica, terça maior e quinta justa', 'Tônica, terça maior e quinta diminuta', 'Tônica, terça menor e quinta aumentada', 'B'),
(22, 'C, D, E', 'C, E, G', 'C, F, A', 'C, G, B', 'B'),
(23, 'A terça maior ou menor', 'A quinta justa ou diminuta', 'A presença de uma sétima maior ou menor', 'O uso de notas sustenidas ou bemóis', 'A'),
(24, 'A, C, E', 'A, D, F', 'A, C#, E', 'A, D#, F#', 'A'),
(25, 'Tônica, terça menor e quinta diminuta', 'Tônica, terça maior e quinta diminuta', 'Tônica, terça menor e quinta aumentada', 'Tônica, quinta diminuta e sétima menor', 'A'),
(26, 'G, B, D, F', 'G, C, E, G', 'G, B, D, F#', 'G, A, D, F', 'A'),
(27, 'Tônica, terça maior e quinta justa', 'Tônica, terça menor e quinta justa', 'Tônica, terça maior e quinta diminuta', 'Tônica, terça menor e quinta aumentada', 'B'),
(28, 'E, G, B', 'E, G#, B', 'E, A, B', 'E, G#, C', 'B'),
(29, 'Tônica, terça maior e quinta justa', 'Tônica, terça maior e quinta aumentada', 'Tônica, terça menor e quinta justa', 'Tônica, terça menor e quinta aumentada', 'B'),
(30, 'D, F, A', 'D, G, A', 'D, F#, A', 'D, F, Ab', 'A'),
(31, 'Uma sequência de notas tocadas em ordem ascendente ou descendente', 'Um conjunto de acordes que pertencem a uma mesma tonalidade', 'Uma escala tocada em diferentes oitavas', 'Um grupo de acordes aumentados e diminutos', 'B'),
(32, 'C, Dm, Em, F, G, Am, Bdim', 'C, D, E, F, G, A, Bm', 'C, D, E, F, G, A, Bb', 'C, Dm, Em, F, G, A, Bb', 'A'),
(33, 'I', 'IV', 'V', 'VII', 'C'),
(34, 'G, Am, Bm, C, D, Em, F#dim', 'G, A, B, C, D, E, F#', 'G, A, Bm, C, Dm, Em, F#', 'G, Am, Bm, C, Dm, Em, F', 'A'),
(35, 'Em', 'F#m', 'G', 'Em', 'D'),
(36, 'IV', 'II', 'III', 'VI', 'A'),
(37, 'Am, Bdim, C, Dm, Em, F, G', 'Am, Bm, C, D, Em, F, G', 'A, Bm, C, Dm, E, F, G', 'Am, Bdim, C, D, E, F, G', 'A'),
(38, 'Maior', 'Menor', 'Diminuto', 'Maior', 'D'),
(39, 'F, Gm, Am, Bb, C, Dm, Edim', 'F, Gm, Am, Bb, C, Dm, Edim', 'F, Gm, A, Bb, C, Dm, E', 'F, Gm, A, B, C, Dm, Edim', 'B'),
(40, 'F#m', 'G#m', 'A', 'B', 'A');

-- PERGUNTAS AVANÇADAS
insert into questoes (pergunta, fkExperiencia) values
('O que é uma escala pentatônica?', 3),
('Qual é a fórmula da escala pentatônica maior?', 3),
('Quais são as notas da escala pentatônica maior de Dó (C)?', 3),
('Qual é a fórmula da escala pentatônica menor?', 3),
('Quais são as notas da escala pentatônica menor de Lá (Am)?', 3),
('Qual é a principal diferença entre a escala pentatônica maior e a menor?', 3),
('Quais são as notas da escala pentatônica menor de Mi (Em)?', 3),
('Qual é a escala pentatônica maior de Sol (G)?', 3),
('Qual é uma característica comum das escalas pentatônicas?', 3),
('Quais são as notas da escala pentatônica maior de Ré (D)?', 3),
('O que é uma tétrade?', 3),
('Quais são as notas de um acorde de Dó Maior com sétima maior (Cmaj7)?', 3),
('Qual é a composição de um acorde menor com sétima menor (m7)?', 3),
('Quais são as notas do acorde de Sol com sétima dominante (G7)?', 3),
('Qual é a diferença entre um acorde de sétima maior e um acorde de sétima menor?', 3),
('Quais são as notas do acorde de Ré menor com sétima menor (Dm7)?', 3),
('O que caracteriza um acorde meio diminuto (m7b5)?', 3),
('Quais são as notas do acorde de Si meio diminuto (Bø)?', 3),
('Quais são as notas de um acorde de Lá menor com sétima (Am7)?', 3),
('Qual é a composição de um acorde diminuto completo (dim7)?', 3);

insert into respostas (fkQuestao, alternativaA, alternativaB, alternativaC, alternativaD, correta) values
(41, 'Uma escala composta por cinco notas', 'Uma escala composta por seis notas', 'Uma escala composta por sete notas', 'Uma escala composta por oito notas', 'A'),
(42, 'T, T, S, T, T', 'T, T, T, S, T', 'T, T, S, T, S', 'T, T, T, S, T, T', 'D'),
(43, 'C, D, E, G, A', 'C, D, F, G, A', 'C, D, E, F, G', 'C, E, G, A, B', 'A'),
(44, 'T, T, S, T, T', 'T, S, T, S, T, T', 'T, S, T, T, S, T', 'T, S, T, T, S, T, S', 'D'),
(45, 'A, C, D, E, G', 'A, B, D, E, G', 'A, C, E, F, G', 'A, B, C, D, E', 'A'),
(46, 'A ausência de uma quinta justa', 'A ausência de uma terça maior ou menor', 'A ausência de uma sétima maior ou menor', 'A presença de uma quarta aumentada', 'B'),
(47, 'E, G, A, B, D', 'E, F#, A, B, D', 'E, G, B, D, F#', 'E, G, A, C, D', 'A'),
(48, 'G, A, B, D, E', 'G, A, B, C, D', 'G, A, C, D, E', 'G, B, D, E, F#', 'A'),
(49, 'Incluem todas as notas da escala diatônica', 'Excluem a quarta e a sétima notas da escala diatônica', 'Excluem a quinta e a sexta notas da escala diatônica', 'Incluem apenas notas naturais', 'B'),
(50, 'D, E, F#, A, B', 'D, F, G, A, C', 'D, E, G, A, B', 'D, F#, G, A, C', 'A'),
(51, 'Um acorde de quatro notas', 'Um acorde de três notas', 'Um acorde de cinco notas', 'Uma escala de quatro notas', 'A'),
(52, 'C, E, G, Bb', 'C, E, G, B', 'C, E, G, A', 'C, Eb, G, Bb', 'B'),
(53, 'Tônica, terça maior, quinta justa e sétima menor', 'Tônica, terça menor, quinta justa e sétima menor', 'Tônica, terça menor, quinta diminuta e sétima menor', 'Tônica, terça menor, quinta justa e sétima maior', 'B'),
(54, 'G, B, D, F', 'G, B, D, F#', 'G, B, D, E', 'G, Bb, D, F', 'A'),
(55, 'A presença de uma quinta diminuta', 'A presença de uma terça maior', 'A diferença na sétima', 'A presença de uma terça menor', 'C'),
(56, 'D, F, A, C', 'D, F, A, B', 'D, F#, A, C', 'D, F, A, Bb', 'A'),
(57, 'Tônica, terça menor, quinta diminuta e sétima menor', 'Tônica, terça menor, quinta diminuta e sétima maior', 'Tônica, terça menor, quinta justa e sétima menor', 'Tônica, terça menor, quinta jUsta e sétima diminuta', 'A'),
(58, 'B, D, F, A', 'B, D#, F#, A', 'B, D#, F, A', 'B, D, F#, A#', 'A'),
(59, 'A, C, E, G', 'A, C#, E, G', 'A, D, E, G', 'A, C, E, F#', 'A'),
(60, 'Tônica, terça menor, quinta diminuta e sétima menor', 'Tônica, terça menor, quinta diminuta e sétima diminuta', 'Tônica, terça menor, quinta justa e sétima menor', 'Tônica, terça menor, quinta diminuta e sétima maior', 'B');















