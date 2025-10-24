const style = document.createElement("style");
style.textContent = `
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #e672f5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #1572ff;
    text-align: center;
    margin: 40px 0 30px;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 25px;
    width: 90%;
    max-width: 1000px;
    justify-items: center;
  }

  .card {
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card h2 {
    color: purple;
    font-size: 18px;
    margin: 0;
  }

  .card p {
    color: purple;
    font-size: 14px;
    margin-top: 6px;
  }
`;
document.head.appendChild(style);

const app = document.getElementById("app");

const title = document.createElement("h1");
title.textContent = "projects";
app.appendChild(title);

const container = document.createElement("div");
container.className = "projects-container";
app.appendChild(container);

for (let i = 1; i <= 18; i++) {
  const card = document.createElement("div");
  card.className = "card";

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `project ${i}`;

  const author = document.createElement("p");
  author.textContent = "youssef";

  card.appendChild(projectTitle);
  card.appendChild(author);
  container.appendChild(card);
}