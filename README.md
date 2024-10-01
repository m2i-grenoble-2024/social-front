# SocialFront
Projet front end en angular lié à [ce backend Symfony](https://github.com/m2i-grenoble-2024/social-back).

Une authentification par JWT est utilisée dans ce projet, pour toute documentation sur cet aspect, voir plutôt le [projet ionic-auth](https://github.com/m2i-grenoble-2024/ionic-auth) dont la code base de l'auth a été reprise.

## Structure Angular

* **src** C'est là où sera tout le code
    * **app** C'est dans ce dossier que sera 99% du code que l'on fera sous angular
        * **component** Les blocs de base de Angular qui se composent d'un fichier HTML, un fichier TS, un fichier CSS et un fichier de test. Ils font aussi bien office de page que de fragment d'interface graphique (la seule chose qui distingue que c'est une page, c'est le fait que le component sera chargé dans [le fichier de routing](src/app/app.routes.ts) et lié à une route)
        * **service** C'est dans ces fichier qu'on mettra en gros tout ce qui concerne les requête de communication avec le serveur mais aussi toute logique algorithmique qu'on voudrait partager entre plusieurs components
        * **interceptor** C'est des fichiers qui vont servir presqu'exclusivement à configurer de manière globale le HttpClient (pour modifier toutes les requêtes ou réponses HTTP faites par le HttpClient)
        * **entities.ts** fichier non standard qui ne se retrouvera pas dans tous les projets angular, mais dont on se sert pour déclarer toutes les interfaces des data récupérées du back
        * **app.route.ts** fichier de routing principal dans lequel on définira les routes/url de notre application et à quel component chaque route est liée
    * **main.ts** Point d'entrée de l'application, on est parfois amené à rajouter des imports globaux, il est lié à [un fichier de configuration dans app](src/app/app.config.ts)
    * **index.html** le fichier HTML chargé de base par l'application, on peut y mettre des metadonnées, certains link peut être (mais généralement on pourra les charger dans le angular.json) et tout code HTML qui ne serait pas géré par angular
    * **style.css** Le fichier de style css global de l'application
* **public** c'est là où on peut mettre des fichiers static (par exemple la favicon, ou certains graphismes)
* **node_modules** le code des dépendances, on y touche pas, il est généra par `npm install`
* **angular.json** un fichier de configuration du framework qu'on est parfois amené à modifier par exemple pour charger certaines library css ou javascript de manière globale
