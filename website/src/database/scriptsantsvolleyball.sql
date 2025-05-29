create user 'santsvolley'@'localhost' identified by 'santsvolley';

grant all on * . * to 'santsvolley'@'localhost';

create database santsvolley;

use santsvolley;

-- Campo de testes


--

insert into jogadores values (default, 'Cachopa', 29, ' Volley Monza ', 'Atuando', '../assets/imgs/jogadores/cachopa.jpg');



create table usuario(

idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) not null unique,
telefone char(10) not null,
senha varchar(45) not null,
cargo varchar(45) not null,
constraint chkCheck check (cargo in('Normal','Gerente'))

);

insert into usuario values (default, 'Matheus', 'matheus@gmail.com', '96454-2424', 'matheussantana', 'Gerente');

create table quiz(

idquiz int primary key auto_increment,
fkusuario int not null,
constraint fkusuarioquiz foreign key (fkusuario) references usuario(idusuario),
posicao varchar(20) not null,
dtquiz date not null,
nota int
);


create table jogadores(

idjogadores int primary key auto_increment,
nome varchar(120) not null,
idade int not null,
clube varchar(45) not null,
foto varchar(255) not null

);



create table favoritar_jogador(

idfavoritar_jogador int auto_increment,
fkjogadores int not null,
fkusuario int not null,
constraint fksnpran foreign key (fkjogadores) references jogadores(idjogadores),
constraint fksnpranus foreign key (fkusuario) references usuario(idusuario),
constraint pkall primary key (idfavoritar_jogador, fkjogadores, fkusuario)

);


create table clubes(

idclubes int primary key auto_increment,
nome varchar(45) not null,
liga varchar(45) not null,
dtfund char(4) not null,
foto varchar(255) not null

);


create table favoritar_clube(

idfavoritar_clube int auto_increment,
fkclube int not null,
fkusuario int not null,
constraint fksnprancl foreign key (fkclube) references clubes(idclubes),
constraint fksnpranuscl foreign key (fkusuario) references usuario(idusuario),
constraint pkallcl primary key (idfavoritar_clube, fkclube, fkusuario)

);








