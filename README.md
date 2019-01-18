# L'impact du numérique sur le climat  
# Impact of information technology on energy consumption

Gomès Antoine, Lafiosca Léo, Touati Gaïs, Jourdan Luca
## Description (EN)
This project has been done in the course [Data Visualization](https://lyondataviz.github.io/teaching/lyon1-m2/2018/) of the [Master Artificial Intelligence](http://master-info.univ-lyon1.fr/IA/) at [University Claude Bernard Lyon 1](https://www.univ-lyon1.fr/).

The objective is to do an overview of the energy consumption of the digital industry. Once the issues and participants are identified, we propose ways to achieve more socially responsible digital consumption.

## Objectifs (FR)
Ce projet a été effectué dans le cadre de l'UE "[Visualisation Interactive de Données](https://lyondataviz.github.io/teaching/lyon1-m2/2018/)" du [Master IA](http://master-info.univ-lyon1.fr/IA/) de [l'Université Lyon 1](https://www.univ-lyon1.fr/).

L'objectif est de faire un apperçu de la consommation d'énergie de l'industrie du numérique. Une fois les enjeux et les participants cernés, nous proposons des pistes pour avoir une consommation numérique plus responsable à l'échelle de la société.

## Visualisation
Notre visualisation est un storyboard, qui part d'un point de vue général du problème pour aller vers le particulier. Nous commençons par présenter l'évolution de la consommation numérique avec un linechart qui permet de bien voir la progression exponentielle. Puis nous détaillons cette consommation avec un piechart, qui permet de bien apprécier les proportions des différents domaines. Enfin, avec une visualisation proche d'un diagramme de Sankey, nous représentons les gains potentiels de l'adoption de nos recommandations. Nous représentons chaque gain comme un nouveau flot qui arrive, pour au final tous se rejoindre dans un grand flot.

## Données

Nous tirons nos données principalement du rapport d'octobre 2018 du Shift Project, une association française créee en 2010 par Jean Marc Jancovici, qui oeuvre pour l'atténuation du changement climatique et la réduction de la dépendance aux énergies fossiles. Nous complétons ces informations avec des données du rapport de l'ADEME de décembre 2016 et d'autres sources diverses sur internet listées au fil de ce document.

## Détails des chiffres
  
La question ne se posant que depuis récemment, il a été très difficile de recueillir des données sur le sujet. Les deux rapports principaux que nous avons lus déplorent d'ailleurs en conclusion le manque de chiffres à disposition et le manque de méthodes claires pour les obtenir. Beaucoup des chiffres que nous affichons dans la visualisation n'ont pas été trouvés explicitement nulle part, et nous avons du les calculer à partir de ce qu'on a. Les chiffres sont donc à prendre avec des pincettes, bien que nous ayons fait de notre mieux pour trier l'information. Voici le détail des calculs.

#### Linechart :

Le Shift Project donne les chiffres de consommation d'énergie du numérique de 2013 a 2018 et explique que la croissance est de 9% par an. Nous n'avons trouvé nulle part de données avant 2013, mais indique que la croissance est de 4% à 9% par an depuis 2008, mais probablement plus proche de 4% que de 9%. Nous avons ensuite étendu la tendance jusqu'en 2000 pour obtenir une bonne visualisation de l'exponentielle.

#### Piecharts :

Les parts de la consommation sont tirées du Shift Project. Nous avons regroupés plusieurs catégories en surcatégories pour avoir une vision plus générale. Les catégories d'origine sont donc devenues des sous catégories pour les piecharts détaillés. La part de la consommation du au refroidissement des datacenters : ([source](https://www.filiere-3e.fr/2017/06/20/recuperer-lenergie-perdue-datacenters-mythe-realite/)).

Pour les valeurs de la partie consommation, il est très difficile d'obtenir des chiffres sur l'usage des appareils numériques dans le monde. Le Shift Project donne la consommation moyenne d'un smartphone, d'une télé, d'un ordinateur et d'une box internet, et suggère que ces appareils représentent le plus gros de la consommation. Selon les statistiques de l'OCDE ([source](http://www.oecd.org/fr/els/famille/basededonnees.htm)), un foyer moyen est constitué de 2.4 personnes. N'ayant pas de chiffre plus précis, je considère arbitrairement qu'un foyer moyen de 2.4 personnes possède 2 smartphones, 2 ordinateurs, 1 télé et 1 box internet. On peut donc maintenant calculer la proportion de chacun de ses appareils dans son mix énergétique numérique. On obtient ainsi les résultats affichés.

#### Diagramme de Sankey :

Pour tous les calculs, nous considérons qu'1 kWh éléctrique consommé représente 500g de CO2 émis ([source](https://www.greenit.fr/2009/04/24/combien-de-co2-degage-un-1-kwh-electrique/)).
Cette équivalence dépend très fortement du pays où le kWh a été consommé. En France c'est plutôt 90g, en moyenne en Europe c'est 440g, aux Etats-Unis 670g ... On a décide de se placer dans le cadre de l'OCDE et de prendre 500g comme valeur, qui est une moyenne approximative et simplifie les calculs.

Pour la suppression des mails, on estime que la conservation de 1go de données dans un datacenter consomme 32kWh par an ([source](https://en.reset.org/blog/save-planet-clean-your-inbox-12242015)). On considère que le mail moyen pèse 200Ko, basé sur la moyenne de mes 6000 mails ... car nous n'avons pas trouvé de données plus précises. On peut donc calculer le poids de données économisées si chaque personne de l'OCDE supprime 100 mails tous les ans = 1,3 milliards * 200ko. A partir de ce poids on peut ensuite calculer l'économie en kWh équivalente, puis l'émission de CO2 équivalente.

Pour le spam, on estime que 74800 milliards de mails sont envoyés tous les ans ([source](https://www.templafy.com/blog/how-many-emails-are-sent-every-day-top-email-statistics-your-business-needs-to-know/)). On considère que 50% des emails envoyés sont du spam. Selon le rapport de l'ADEME, l'envoi d'un mail moyen correspond à l'émission de 3g de co2 ([source](https://www.bfmtv.com/planete/les-spams-en-diminution-dans-nos-boites-mail-902851.html)).

Pour l'obsolescence, selon le Shift project, la durée de vie moyenne d'un smartphone est de 2.5 ans. En l'augmentant à 3.5 ans on réduit l'émission d'énergie due à la production des smartphones de 40%, ce qui représente 640 millions de smartphones produits en moins chaque année, à 70kWh le smartphone ([source](https://spectrum.ieee.org/energy/environment/your-phone-costs-energyeven-before-you-turn-it-on)).

Pour la veille, selon l'ADEME un foyer moyen en France consomme 50W en permanence d'appareils en veille. Nous avons décidé d'extrapoler cette valeur pour l'OCDE pour correspondre à la même échelle que tous les chiffres précédents. Nous savons que l'OCDE correspond à 1.3 milliards de personnes, avec 2.4 personnes par foyer en moyenne, ce qui nous donne le nombre de foyers. On peut ensuite transformées les watts annuels en kWh par foyer, et multiplier par le nombre de foyers.

Pour la consommation de la vidéo, nous estimons que baisser d'un cran la qualité vidéo sur youtube réduit la consommation de 100mW ([source](https://www.researchgate.net/profile/Mohammad_Hoque10/publication/267394699_Energy_Consumption_Anatomy_of_Live_Video_Streaming_from_a_Smartphone/links/544edf050cf26dda08901d22/Energy-Consumption-Anatomy-of-Live-Video-Streaming-from-a-Smartphone.pdf?origin=publication_detail)). On multiplie ensuite avec le temps de vidéo visionné sur Youtube sur 1 an ([source](https://www.webrankinfo.com/dossiers/youtube/chiffres-statistiques)).

#### Equivalences :

1 mail = 6Wh
1 café = 12Wh ([source](http://stockage.univ-valenciennes.fr/EcoPEM/BoiteB/co/III_d.html))
1 heure d'ampoule = 60Wh (pour une ampoule de 60W)
1 km en voiture = 280Wh (pour une voiture qui emet 140g/km)
1 km en avion par passager = 720Wh (pour un avion qui emet 360g/km/passager)

## Références pour le code :

Les piechart sont grandement inspirés de : [https://gist.github.com/cnaithani/1ceda79527a698950d60628ed935d745](https://gist.github.com/cnaithani/1ceda79527a698950d60628ed935d745)  
Le bar chart est inspiré de : [http://bl.ocks.org/arpitnarechania/6616c93c74840d87de839aab44aba77f](http://bl.ocks.org/arpitnarechania/6616c93c74840d87de839aab44aba77f)  
Le fonctionnement du scroll : [http://vallandingham.me/scroller.html](http://vallandingham.me/scroller.html)  



