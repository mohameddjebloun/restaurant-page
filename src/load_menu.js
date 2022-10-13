//Import the images
import AuGratin from "./images/auGratin.jpg";
import CreamyMashed from "./images/creamyMashed.jpg";
import FrenchFries from "./images/frenchFries.jpg";
import GreekSalad from "./images/greekSalad.jpg";
import Pierogi from "./images/pierogi.jpg";
import SouthernFried from "./images/southernFried.jpg";
//Create the load_menu function that loads the page's menu tab and export it
export default function load_menu() {
    //Query select the content div
    const content = document.querySelector("#content");
    //Create the menu div element and give it the container class
    const menu = document.createElement("div");
    menu.classList.add("container");
    //Create the heading h1 and give its necessary classes and text
    const heading = document.createElement("h1");
    heading.innerText = "Menu";
    heading.classList.add("polygon");
    //Create 6 food containers with their appropriate image and title then append them to the menu div
    //Au Gratin
    const auGratinContainer = document.createElement("div");
    auGratinContainer.classList.add("container", "polygon");
    const auGratinTitle = document.createElement("h2");
    auGratinTitle.innerText = "Au Gratin";
    const auGratinImg = new Image();
    auGratinImg.src = AuGratin;
    auGratinContainer.append(auGratinTitle, auGratinImg);
    //Creamy Mashed
    const creamyMashedContainer = document.createElement("div");
    creamyMashedContainer.classList.add("container", "polygon");
    const creamyMashedTitle = document.createElement("h2");
    creamyMashedTitle.innerText = "Creamy Mashed";
    const creamyMashedImg = new Image();
    creamyMashedImg.src = CreamyMashed;
    creamyMashedContainer.append(creamyMashedTitle, creamyMashedImg);
    //French Fries
    const frenchFriesContainer = document.createElement("div");
    frenchFriesContainer.classList.add("container", "polygon");
    const frenchFriesTitle = document.createElement("h2");
    frenchFriesTitle.innerText = "French Fries";
    const frenchFriesImg = new Image();
    frenchFriesImg.src = FrenchFries;
    frenchFriesContainer.append(frenchFriesTitle, frenchFriesImg);
    //Greek Salad
    const greekSaladContainer = document.createElement("div");
    greekSaladContainer.classList.add("container", "polygon");
    const greekSaladTitle = document.createElement("h2");
    greekSaladTitle.innerText = "Greek Salad";
    const greekSaladImg = new Image();
    greekSaladImg.src = GreekSalad;
    greekSaladContainer.append(greekSaladTitle, greekSaladImg);
    //Pierogi
    const pierogiContainer = document.createElement("div");
    pierogiContainer.classList.add("container", "polygon");
    const pierogiTitle = document.createElement("h2");
    pierogiTitle.innerText = "Pierogi";
    const pierogiImg = new Image();
    pierogiImg.src = Pierogi;
    pierogiContainer.append(pierogiTitle, pierogiImg);
    //Southern Fried
    const southernFriedContainer = document.createElement("div");
    southernFriedContainer.classList.add("container", "polygon");
    const southernFriedTitle = document.createElement("h2");
    southernFriedTitle.innerText = "Southern Fried";
    const southernFriedImg = new Image();
    southernFriedImg.src = SouthernFried;
    southernFriedContainer.append(southernFriedTitle, southernFriedImg);

    //Append all elements to menu
    menu.append(
        heading,
        auGratinContainer,
        creamyMashedContainer,
        frenchFriesContainer,
        greekSaladContainer,
        pierogiContainer,
        southernFriedContainer
    );
    //Append menu to the content div
    content.appendChild(menu);
}
