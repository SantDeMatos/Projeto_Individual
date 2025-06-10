create user 'santsvolley'@'localhost' identified by 'santsvolley';

grant all on * . * to 'santsvolley'@'localhost';

create database santsvolley;

use santsvolley;

-- Campo de testes

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


insert into jogadores values (default, 'Cachopa', 29, ' Volley Monza ', '../assets/imgs/jogadores/cachopa.jpg');
insert into jogadores values (default, 'Bruninho', 38, 'Renata/Campinas', '../assets/imgs/jogadores/bruninho.webp');
insert into clubes values (default, 'Sesi Bauru', 'Superliga', '2005', '../assets/imgs/clubes/sesi.png');
insert into usuario values (default, 'Matheus', 'matheus@gmail.com', '96454-2424', 'matheussantana', 'Gerente');

insert into jogadores values (default, 'Lucão', 39, 'Sada Cruzeiro',  '../assets/imgs/jogadores/lucao.jpg'),
(default, 'Lucarelli', 33, 'JTEKT Stings', '../assets/imgs/jogadores/lucarelli.webp'),
(default, 'Macris', 36, 'Praia Clube', '../assets/imgs/jogadores/Macris.jpg'),
(default, 'Rosamaria', 31, 'Denso Airybees',  '../assets/imgs/jogadores/rosamaria.jpg'),
(default, 'Thales', 36, 'BOGDANKA LUK',  '../assets/imgs/jogadores/thales.jpg'),
(default, 'Darlan', 22, 'Verona', '../assets/imgs/jogadores/darlan.jpg'),
(default, 'Ana Cristina', 21, 'Fenerbahçe', '../assets/imgs/jogadores/anacristina.jpg'),
(default, 'Lukas Bergmann', 21, 'Sesi Bauru',  '../assets/imgs/jogadores/lucasbergmann.jpg'),
(default, 'Gabi', 31, 'Imoco Volley',  '../assets/imgs/jogadores/gabi.webp'),
(default, 'Leal', 36, 'Bluenergy Piacenza',  '../assets/imgs/jogadores/leal.jpg'),
(default, 'Júlia Bergmann', 24, 'Türk Hava',  '../assets/imgs/jogadores/juliabergmann.jpg'),
(default, 'Alan Souza', 31, 'Sada Cruzeiro',  '../assets/imgs/jogadores/alansouza.jpg'),
(default, 'Thaísa', 38, 'Minas Clube',  '../assets/imgs/jogadores/thaisa.jpg'),
(default, 'Honorato', 28, 'Suwalki', '../assets/imgs/jogadores/honorato.jpg'),
(default, 'Nyeme', 26, 'Minas Clube',  '../assets/imgs/jogadores/nyeme.jpg');

insert into clubes values (default, 'Sada Cruzeiro', 'Superliga', '2005', '../assets/imgs/clubes/sada.png'),
(default, 'Praia Clube', 'Superliga', '1989', '../assets/imgs/clubes/praia.png'),
(default, 'Vôlei Renata', 'Superliga', '2010', '../assets/imgs/clubes/renata.jpg'),
(default, 'Joinville Vôlei', 'Superliga', '2020', '../assets/imgs/clubes/joinville.jpg'),
(default, 'Verona Volley', 'Superliga da Itália', '2001', '../assets/imgs/clubes/verona.png'),
(default, 'JTEKT Stings', ' V.League', '1958', '../assets/imgs/clubes/jtekt.png'),
(default, 'Osaka Bluteon', 'V.League', '1951', '../assets/imgs/clubes/osaka.png'),
(default, 'Modena Volley', 'Superliga da Itália', '1996', '../assets/imgs/clubes/modena.png'),
(default, 'Osasco Voleibol', 'Superliga', '2009', '../assets/imgs/clubes/osasco.png');


