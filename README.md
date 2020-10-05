# Découverte de fetch côté serveur

## La solution native

Le module `http` dispose de 2 méthodes `request` et `get` (un raccourci équivalent à `request(url, { method: 'get'})`). Mais ces 2 méthodes ne gèrent pas les Promises et sont assez complexes à prendre en main.

## Node-fetch

Heureusement, on est pas les seuls à faire ce constat et une petite équipe de développement s'est chargée, il y a quelques temps maintenant, de coder l'équivalent de `fetch`, qu'on connaît déjà côté client, dans Node :heart_eyes:

Le code d'_index.js_ propose une petite démonstration :rocket:

## Mais alors, Combine...

Eh oui, le lien que je vous partage tous les matins n'est rien d'autre qu'un service qui contacte les API de quelques grandes plateformes de streaming audio pour proposer un même titre sur un maximum de plateformes. Le fonctionnement est décrit dans [ce readme](./combine.md).

## Et l'authentification

Comme énoncé en cockpit, l'authentification peut avoir pas mal d'utilités, les 2 principales étant :
- limiter l'utilisation d'un service pour éviter les attaques
- tirer des statistiques sur ce qui est vraiment utilisé de l'API

Pour les API proposant une authentification, la plupart proposera de passer la clé d'API dans la query string (exemple avec BreweryDB dans le fichier _brewerydb.http_). Les plus excentriques proposeront de passer la clé dans un header HTTP. Dans tous les cas, ça ne se devine pas : c'est dans la doc :wink: