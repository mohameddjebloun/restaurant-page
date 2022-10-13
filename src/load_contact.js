//Create the load_contact function that loads the page's contact tab and export it
export default function load_contact() {
    //Query select the content div
    const content = document.querySelector("#content");
    //Create the contact div element and give it the container class
    const contact = document.createElement("div");
    contact.classList.add("container");
    //Create the heading h1 and give its necessary classes and text
    const heading = document.createElement("h1");
    heading.innerText = "Contact Us";
    heading.classList.add("polygon");
    //Create 3 contact containers with their appropriate text then append them to the contact div
    //Mama Batata
    const mamaBatataContainer = document.createElement("div");
    mamaBatataContainer.classList.add("container", "polygon");
    const mamaBatataTitle = document.createElement("h2");
    mamaBatataTitle.innerText = "Mama Batata";
    const mamaBatataInfo = document.createElement("p");
    mamaBatataInfo.innerText = "Chef 555-555-5554 totallyRealEmail@notFake.com";
    mamaBatataContainer.append(mamaBatataTitle, mamaBatataInfo);
    //Papa Batata
    const papaBatataContainer = document.createElement("div");
    papaBatataContainer.classList.add("container", "polygon");
    const papaBatataTitle = document.createElement("h2");
    papaBatataTitle.innerText = "Papa Batata";
    const papaBatataInfo = document.createElement("p");
    papaBatataInfo.innerText =
        "Manager 555-555-5555 totallyRealEmail@notFake.com";
    papaBatataContainer.append(papaBatataTitle, papaBatataInfo);
    //Baby Batata
    const babyBatataContainer = document.createElement("div");
    babyBatataContainer.classList.add("container", "polygon");
    const babyBatataTitle = document.createElement("h2");
    babyBatataTitle.innerText = "Baby Batata";
    const babyBatataInfo = document.createElement("p");
    babyBatataInfo.innerText =
        "Waiter 555-555-5556 totallyRealEmail@notFake.com";
    babyBatataContainer.append(babyBatataTitle, babyBatataInfo);
    //Append all elements to contact
    contact.append(
        heading,
        mamaBatataContainer,
        papaBatataContainer,
        babyBatataContainer
    );
    //Append contact to the content div
    content.appendChild(contact);
}
