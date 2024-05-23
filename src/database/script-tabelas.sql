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