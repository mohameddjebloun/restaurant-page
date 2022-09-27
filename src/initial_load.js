//Create the initial_load function that loads the page's navbar and export it
export default function initial_load() {
    //Query select the content div
    const content = document.querySelector("#content");
    //Create a new div and give it the navbar id
    const navbar = document.createElement("div");
    navbar.id = "navbar";
    //Create the three buttons home, menu and contact
    const home = document.createElement("button");
    home.innerText = "Home";
    const menu = document.createElement("button");
    menu.innerText = "Menu";
    const contact = document.createElement("button");
    contact.innerText = "Contact";
    //Append the buttons to the navbar and navbar to the content div
    navbar.append(home, menu, contact);
    content.appendChild(navbar);
}
