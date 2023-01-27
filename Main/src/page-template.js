function managerCard(data) {
  const card =  `
      <div class="card employee-card border-primary">
      <div class="card-header bg-primary-subtle">${data.name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: Manager</li>
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">Office #: ${data.office}</li>
      </ul>
    </div>
      `;
      return card;
}


function engineerCard(data) {
  return `
        <div class="card employee-card border-primary">
        <div class="card-header bg-primary-subtle">${data.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Role: Engineer</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">GitHub: ${data.github}</li>
        </ul>
      </div>
        `;
}


function internCard(data) {
  return `
        <div class="card employee-card border-primary">
        <div class="card-header bg-primary-subtle">${data.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Role: Intern</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">School: ${data.school}</li>
        </ul>
      </div>
        `;
}


function makeCards(data) {
  for (let i = 0; i < data.length - 1; i++) {
    const choice = data[i].getRole();
    const info = data[i]
    if (choice === "Manager") {
      console.log(info)
      managerCard(info);
    }
    if (choice === "Engineer") {
      engineerCard(data[i]);
    }
    if (choice === "Intern") {
      internCard(data[i]);
    }
  }
}

function pageGenerate(team) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Builder</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <header class="bg-primary p-5 text-light display-4 text-center">
        My Software Team
      </header>
      <section class="container card-deck">
       
      ${makeCards(team)}
       
      </section>
    </body>
  </html>
  `;
}

module.exports = pageGenerate;
