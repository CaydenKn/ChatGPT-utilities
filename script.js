let form = document.querySelector(".chat-form");

// Create panel
let panel = document.createElement("div");
panel.style.cssText = `
  position: fixed;
  top: 10px;
  right: 10px;
  background: #444654;
  padding: 10px;
  border-radius: 10px;
  border-color: white;
  border-width: 2px;
  box-shadow: 0 0 10px black;
`;
document.body.appendChild(panel);

// Create title
let title = document.createElement("div");
title.innerHTML = "Chat Utilities by PaperLite";
title.style.cssText = `
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
title.addEventListener("click", function() {
    window.open("https://paperlite.net", "PaperLite Technologies");
});
title.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";
    this.style.transform = "scale(1.1)";
});
title.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
});
panel.appendChild(title);

// Create buttons
let btns = [
  {
    text: "Continue Code",
    value: "Continue from the previous line of code.",
  },
  {
    text: "Rewrite It",
    value: "Could you rewrite this in a different way?",
  },
  {
    text: "Button 3",
    value: "Button 3 was clicked",
  },
];

for (let i = 0; i < btns.length; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = btns[i].text;
  btn.style.cssText = `
    margin: 5px;
    padding: 5px;
    background: #343541;
    border-radius: 5px;
  `;
  btn.addEventListener("click", function() {
    document.querySelector("textarea").value = btns[i].value;
  });
  btn.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.boxShadow = "0 0 5px white";
  });
  btn.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
  });
  panel.appendChild(btn);
}
