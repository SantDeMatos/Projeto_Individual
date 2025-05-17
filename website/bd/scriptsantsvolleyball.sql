create user 'santsvolley'@'localhost' identified by 'santsvolley';

grant all on * . * to 'santsvolley'@'localhost';

create database santsvolley;

use santsvolley;

alter table usuario modify column nome varchar(155) not null;

create table usuario(

idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) not null unique,
telefone char(10) not null,
senha varchar(45) not null,
cargo varchar(45) not null,
constraint chkCheck check (cargo in('Normal','Gerente'))

);

create table quiz(

idquiz int primary key auto_increment,
fkusuario int not null,
constraint fkusuarioquiz foreign key (fkusuario) references usuario(idusuario),
op1 varchar(1) not null,
op2 varchar(1) not null,
op3 varchar(1) not null,
op4 varchar(1) not null,
op5 varchar(1) not null,
op6 varchar(1) not null,
op7 varchar(1) not null,
op8 varchar(1) not null,
op9 varchar(1) not null,
op10 varchar(1) not null,
op11 varchar(1) not null,
dtquiz date not null
);

create table jogadores(

idjogadores int primary key auto_increment,
nome varchar(120) not null,
idade int not null,
clube varchar(45) not null,
statusj varchar(45) not null,
constraint chkstatusj check (statusj in('Atuando','Aposentado')),
foto blob not null

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
dtfund date not null

);


create table favoritar_clube(

idfavoritar_clube int auto_increment,
fkclube int not null,
fkusuario int not null,
constraint fksnprancl foreign key (fkclube) references clubes(idclubes),
constraint fksnpranuscl foreign key (fkusuario) references usuario(idusuario),
constraint pkallcl primary key (idfavoritar_clube, fkclube, fkusuario)

);

alter table quiz add column nota int;



describe quiz;





