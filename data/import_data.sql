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
('Martine en Terre du Milieu', 1995, 'MartineenTerreduMilieu', 3, 3, 'Martine doit aller dans le Mordor pour trouver l’anneau unique. Mais il lui faut d’abord s’éloigner des autres Elfes, et réussir à s’infiltrer chez Saroumane. C’est ainsi que la jeune fille se retrouve dans la forêt de Fangorn, où elle va devoir affronter les Orques à maintes reprises, mais aussi le Seigneur des Ténèbres…'),
('L’attrape-misérables', 2021, 'Lattrapemiserables', 4, 4, 'Hiver 1920, Paris. Les orphelins de la guerre prennent peu à peu possession des lieux, s’organisant en groupes autour du poêle qui chauffe et réchauffe les corps et les âmes, et des émissions de radio de Radio-Paris. Cette dernière leur distribue des vivres. Mais, à la fin de l’hiver, le manque de nourriture se fait cruellement sentir.'),
('J’irai cracher sur le château de ma mère', 1996, 'Jiraicrachersurlechateaudemamere', 5, 5, 'Je veux cracher sur le château de ma mère, sur cette ville qui s’est construite avec les flammes des bibliothèques et les fumées des incendies. Une ville qui ne sait pas que la vie est faite de soleil, de vent et de pluie..'),
('La Transformation',2002, 'LaTransformation', 6, 6, 'Un matin, Gregor Samsa tente de se lever pour aller au travail, mais il se rend compte que quelque chose a changé. Il n’est plus un homme mais une sorte d’intrus tentaculaire. Il va alors tout faire pour se remettre à sa place… Dans le genre science-fiction, c’est de loin mon film préféré. Encore une fois, rien que pour l’ambiance, c’était très réussi.'),
('Entretien avec un sorcier', 2005, 'Entretienavecunsorcier', 7, 7, 'Le vampire erre dans son manoir sans but particulier. Il aime boire du sang frais mais il est surtout féru d’art; il possède de nombreuses œuvres et a mis en place une petite galerie personnelle où il expose ses peintures en toute liberté. Il n’aime pas les choses trop bien rangées et il se sent dans son élément dans un musée.'),
('Don qui flotte dans la Manche', 1849, 'DonquiflottedanslaManche', 8, 8, 'Don Quichotte traverse la Manche sur un radeau de fortune, accompagné de son fidèle écuyer Sancho Panza. Ils sont poursuivis par Don César, le frère du roi, qui veut les empêcher de réaliser leur rêve : devenir chevaliers et délivrer une princesse prisonnière d’un château.'),
('Néo Bible Corannique', 1971, 'NeoBibleCorannique', 9, 9, 'La bible et le Coran réunis dans un unique ouvrage, c’est le projet fou de l’éditeur américain Random House. Le livre est vendu à un prix équivalent à celui d’une Bible, soit moins de 10 dollars. Le livre est composé de la totalité des textes sacrés du judaïsme, du christianisme et de l’islam.'),
('Ils étaient dix au Pays des Merveilles', 1999, 'IlsetaientdixauPaysdesMerveilles', 10, 10, 'Le lapin blanc était en retard. Il était en retard parce qu’il avait perdu sa montre. Il était en retard parce qu’il avait oublié son portefeuille. Il était en retard parce qu’il avait oublié son chapeau. Il était en retard parce qu’il avait oublié ses chaussures.'),
('Le Petit Prince à l’école des sorciers', 2004, 'LePetitPrincealecoledessorciers', 11, 1, 'Le petit Prince arrive à Poudlard, et découvre un monde magique et fascinant. Il fait la connaissance de personnages hauts en couleur, tels que Ron Weasley, Hermione Granger ou encore Harry Potter. Ce livre est un roman d’aventure, destiné aux petits et aux grands.'),
('Da Vinchimiste', 2021, 'DaVinchimiste', 12, 2, 'Un alchimiste tente de hacker le Pentagone, et tombe sur une base secrète remplie d’instruments de musique mécaniques. Mais ces instruments sont vivants, ils sont même dotés d’une conscience propre...'),
('Sherlock Holmes et les Maximonstres', 1964, 'SherlockHolmesetlesMaximonstres', 13, 3, 'Une nouvelle enquête de Sherlock Holmes chez les maximonstres. « J’ai faim, maman. » La dernière fois que j’ai vu mes parents, j’étais en train de manger un bon morceau de viande. Je les ai vus, tous les quatre, en train de manger la même chose.');

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