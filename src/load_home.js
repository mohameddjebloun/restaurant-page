//Create the load_home function that loads the page's home tab and export it
export default function load_home() {
    //Query select the content div
    const content = document.querySelector("#content");
    //Create the home div element and give it the container class
    const home = document.createElement("div");
    home.classList.add("container");
    //Create the heading h1 and give its necessary classes and text
    const heading = document.createElement("h1");
    heading.innerText = "Batata's Potatoes Specials";
    heading.classList.add("polygon");
    //Create review p element and give its necessary text and classes
    const review = document.createElement("p");
    review.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur tellus sem, sed tempus dolor tempor at. Nullam euismod lacinia leo, sit amet congue nisi auctor vel. Quisque sodales porta elit, dignissim rutrum orci rutrum ullamcorper. Ut eget orci eget elit congue varius vel vitae est. Cras fringilla libero in sapien vulputate, ac convallis lacus consequat. Fusce eleifend maximus velit ac pretium. Integer egestas rutrum ullamcorper. Quisque commodo gravida arcu, quis accumsan nunc faucibus quis.";
    review.classList.add("polygon");
    //Create hours p element and give its necessary text and classes
    const hours = document.createElement("p");
    hours.innerText =
        "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm";
    hours.classList.add("polygon");
    //Create location p element and give its necessary text and classes
    const location = document.createElement("p");
    location.innerText = "123 Forest Drive, Forestville, Maine";
    location.classList.add("polygon");
    //Append all elements to home
    home.append(heading, review, hours, location);
    //Append home to the content div
    content.appendChild(home);
}
