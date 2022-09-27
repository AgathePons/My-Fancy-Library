# Infos le projet

Projet hébergé en l'état : [http://ns3251440.ip-87-98-217.eu:3003/](http://ns3251440.ip-87-98-217.eu:3003/)

**Pour installer les dependances du projet**

```
npm install
```

**Pour lancer en mode dev**

```
npm run dev
```

**Pour lancer en mode prod**

```
npm start
```

**Pour automosatiser la compilation du scss (à lancer en parallèle dans un autre terminal)**

```
npm run sass
```

## Autres infos

**Postgres SQL**

La db tourne sur postgresql

**Sequelize**

Le projet utilise l'ORM Sequelize

**SASS**

On peut générer un fichier css non minifié en remplaçant `compressed` par `expanded` dans le script qui gère la compilation de sass.

On peut également ne pas utiliser sass et simplement écrire dans le fichier `style.css`.

Par contre **attention**, si on fait ça et qu'ensuite on fait une compilation sass, le fichier `style.css` sera entièrement écrasé et reécrit via le scss...
