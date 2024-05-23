create database GuitarHow;
use GuitarHow;

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(100),
senha varchar(45)
);

insert into usuario values
(default, 'Caio', 'caio@gmail.com', 'Caio@1234');
