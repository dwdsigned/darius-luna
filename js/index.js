const footerElement = document.createElement("footer");

document.body.append(footerElement);

let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");


let copyright = document.createElement("p");
footer.append(copyright);

copyright.textContent = ` Darius Williams \u00A9 ${thisYear}`;

let skills = [
        "JavaScript",
        "HTML",
        "CSS"
];

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
        let skill = document.createElement("li");
        skill.textContent = skills[i];
        skillsList.append(skill);
}