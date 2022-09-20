Bonjour Monsieur Kevin,
j'ai résolu le problème .
j'ai fait  la redirection de ma requête HTTP avec Spring boot ,premièrement la requête passe de Angular vers Spring boot (pour éviter le probleme du CORS) et puis Spring boot  envoie la requête à l'API c'est à dire que j'ai utilisé la consommation des webservices avec Spring boot .


## 1er cas :  Postman envoie la requête à Spring boot 
![Screenshot from 2022-09-18 23-49-04](https://user-images.githubusercontent.com/75224501/190931503-9dce3c20-e6f2-4ea4-a0eb-7be8b0be0b60.png)

lorsque je clique sur URL ,j'obtiens ce message 
```
Bravo, ta requête a réussi, et ton petit mot est bien enregistré sur notre base de données ! A bientôt, Kévin pour Ouivalo.
```

## 2eme cas : Angular envoie la requête à Spring boot 
![Screenshot from 2022-09-18 23-01-22](https://user-images.githubusercontent.com/75224501/190930203-484fe6ec-5672-45ea-8eff-6394657a7e61.png)

lorsque je clique sur submit  , j'obtiens une reponse de spring boot qui contient le URL du 1er cas .
 
![Screenshot from 2022-09-19 00-10-25](https://user-images.githubusercontent.com/75224501/190932201-3fdf2f7d-0436-4f58-89ae-a40298b59c42.png)
![Screenshot from 2022-09-19 00-09-54](https://user-images.githubusercontent.com/75224501/190932205-a28b3d8f-a433-44c8-bdc1-b47cb60a35e6.png)


NB: je m'excuse pour la redondance des données dans votre BD car j'ai testé l'application plusieurs fois .




