/*
* TODO: the services should be customizable -> add CRUD functionality to add/edit/remove services then add it to the admin dashbaord
* ALTERNATIVE TODO: load multiple images locally and make them available for changing in the admin dashboard panel
* CURRENT: to change an image ->
* 1. Drag the new image into assets/images ! JPG FORMAT ONLY !
* 2. Update the images[], title[], description accordingly - careful when changing the numbers
* 3. In the component.html, update the img/h1/h3 [] accordingly
*
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `assets/images/service${n}.jpg`);
  title = ["Buchete", "Lumanari","Aranjamente","Jerbe"];
  description = [
    "Un buchet de flori este cadoul perfect pentru orice ocazie. Fie că este vorba de un buchet colorat de trandafiri pentru Valentine's Day sau de un aranjament mai sobru pentru un moment de durere, un buchet de flori este o modalitate ușoară și frumoasă de a exprima sentimentele tale.",
    "Lumanarile florale sunt ideale pentru momentele romantice sau ceremoniile religioase. Aceste aranjamente delicate și elegante combină frumusețea florilor cu lumina caldă a lumanarilor pentru a crea o atmosferă plină de farmec și romantism.",
    "Aranjamentele florale sunt cea mai versatilă categorie de servicii florale. De la buchete de mireasă până la aranjamente florale pentru decorul evenimentelor, aceste aranjamente sunt realizate cu flori proaspete și colorate și sunt create pentru a se potrivi cu orice stil și gust. Aranjamentele florale sunt o modalitate ușoară și elegantă de a adăuga un strop de culoare și frumusețe în viața ta sau în orice eveniment special.",
    "Dacă dorești să oferi un omagiu profund, o jerbă de flori este o alegere potrivită. Aceste aranjamente florale lungi și subțiri sunt realizate cu flori proaspete și colorate și sunt adesea folosite pentru ceremoniile funerare sau pentru a comemora un moment special."
  ]
  ngOnInit() {

  }

}
