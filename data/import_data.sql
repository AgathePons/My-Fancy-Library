BEGIN;

INSERT INTO "edition" ("name") VALUES 
('Hachette Pockette'),
('Maison de Poche'),
('Gallimarion'),
('France Moisir'),
('Flammamard'),
('Albin Jean-Michel'),
('Acte Nord'),
('La Roberte'),
('Michel à fond'),
('Panini de Minuit');

INSERT INTO "category" ("name") VALUES 
('Science-friction'),
('Biopic-Thriller'),
('Poésie argumentative'),
('Drame théâtral'),
('Chiante-fiction'),
('Tragico-neo-narrativiste flammand'),
('Sciences socialo-islamo-gôchistes'),
('Pensées parodiques'),
('Théâtre épistolaire'),
('Pamphlets authentiques en alexandrins');

INSERT INTO "author" ("firstname", "lastname") VALUES
('JRR', 'Orwell'),
('George RR', 'Despentes'),
('Marguerite', 'King'),
('Victor', 'Christie'),
('Stephen', 'Kafka'),
('JK', 'Proust'),
('R. L.', 'Pratchett'),
('Marcel', 'Lovecraft'),
('Virginie', 'Levy'),
('Mikhaïl', 'De Saint-Exupéry'),
('Lewis', 'Brown'),
('Jules', 'Conan Doyle'),
('Umberto', 'Tolstoï');

INSERT INTO "book" ("title", "year", "cover", "author_id", "edition_id", "abstract") VALUES 
('Harry Potter et Les Fleurs du mal', 2008, 'HarryPotteretLesFleursdumal', 1, 1, 'Dans un monde imaginaire, un nain se bat contre un ogre. Mais quand il s’épuise, il s’aperçoit qu’il n’est pas seul. Il appelle à l’aide et les autres nains arrivent. Pour lutter contre leur adversaire, ils vont le faire parler…'),
('Stupeur et châtiments', 1854, 'Stupeuretchatiments', 2, 2, 'Une jeune femme découvre un mystérieux coffre au pied du sapin de Noël. Il comporte un médaillon en forme de cœur et un cadenas… Le lendemain matin, le Père Noël passe à nouveau dans tous les foyers des villageois afin de distribuer les cadeaux aux enfants sages. Mais tout ne se passe pas comme prévu…'),
('Martine en Terre du Milieu', 1995, 'MartineenTerreduMilieu', 3, 3, 'Martine doit aller dans le Mordor pour trouver l’anneau unique. Mais il lui faut d’abord s’éloigner des autres Elfes, et réussir à s’infiltrer chez Saroumane. C’est ainsi que la jeune fille se retrouve dans la forêt de Fangorn, où elle va devoir affronter les Orques à maintes reprises, mais aussi le Seigneur des Ténèbres…');

INSERT INTO "user" ("firstname", "lastname", "mail", "password") VALUES 
('Agathe', 'Pons', 'agathepons@mail.com', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG'),
('Betty', 'Chaumet', 'betty-chaumet@mail.fr', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG');

INSERT INTO "comment" ("text", "user_id", "book_id") VALUES 
('Bien mais pas ouf non plus', 1, 1),
('Incoryable chef-d’oeuvre renversant qui raviera toute la famille !!!!', 2, 2),
('Mouai...l’intrigue est sympa mais la fin est décevante.', 1, 3);

INSERT INTO "user_likes_book" ("user_id", "book_id") VALUES 
(1, 2),
(2, 2),
(1, 3);

INSERT INTO "book_has_category" ("book_id", "category_id") VALUES 
(1, 1),
(1, 4),
(2, 5),
(2, 10),
(3, 2);

COMMIT;