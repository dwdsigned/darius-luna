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

let messageForm = document.querySelector("form[name='leave_message']");
console.log(messageForm);


let usersName = messageForm.elements['usersName'].value;



messageForm.addEventListener("submit", event => {
        event.preventDefault();
        // let usersName = event.target.usersName;
        let usersName = messageForm.elements['usersName'].value;
        // let usersEmail = event.target.usersEmail;
        let usersEmail = messageForm.elements['usersEmail'].value;
        // let usersMessage = event.target.usersMessage;
        let usersMessage = messageForm.elements['usersMessage'].value;
        console.log(usersName, usersEmail, usersMessage);
        let messageSection = document.getElementById("messages");
        let messageList = messageSection.querySelector("ul");
        // console.log(messageSection, messageList);
        let newMessage = document.createElement("li");
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
        <span></span>`;
        let removeButton = document.createElement("button");
        removeButton.textContent = `remove`;
        removeButton.setAttribute("type", "button");
        removeButton.addEventListener("click", event => {
                let entry = removeButton.parentNode;
                entry.remove();
        })        
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
        messageForm.reset();
});


fetch('https://api.github.com/users/dwdsigned/repos',
        {method: "GET"}
).then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(repositories => {
    console.log(repositories); // Do something with the data
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
