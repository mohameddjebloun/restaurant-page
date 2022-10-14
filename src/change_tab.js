//Import the necessary modules
import load_home from "./load_home";
import load_menu from "./load_menu";
import load_contact from "./load_contact";
//Create the change_tab function that changes between the 3 tabs
export default function change_tab() {
    //Query select the content div
    const content = document.querySelector("#content");
    //Query select all the button elements and add a click event listener to each one of them
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            //Remove the container div child that contains the home,menu and contact tabs content
            const container = document.querySelector(".container");
            content.removeChild(container);
            //Load the appropriate tab according to the button's inner text
            switch (button.innerText) {
                case "Home":
                    load_home();
                    break;
                case "Menu":
                    load_menu();
                    break;
                case "Contact":
                    load_contact();
                    break;
            }
        });
    });
}
