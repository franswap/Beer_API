# Le déroulé du fonctionnement de Combine.fm

## Envoi d'une url issue d'une plateforme d'écoute

Combine reçoit l'url, la dissèque (domaine, endpoint, paramètres etc.) et identifier la plateforme de provenance :
- Deezer
- Spotify
- Yt Music
- ...

Combine va contacter l'API de la plateforme pour retrouver toutes les infos sur la ressource à partager. Par ex, pour Spotify :

```
http://api.spotify.com/v1/track/{id}
```

## Demande aux autre plateformes d'écoute

Combine a maintenant le nom de l'artiste et de la chanson/album, il va pouvoir demander aux autres plateformes s'ils ont cette chanson dans leur audiothèque

## La page de partage

Combine collecte les réponses de chaque plateforme et génère une page HTML contenant les liens vers le même morceau/album sur les différentes plateformes.