
const createManager = function (manager) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header p-3 mb-2 bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4><span class="material-icons">coffee</span> Manager </h4>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush card">
                <li class="id list-group-item">ID: ${manager.id}</li>
                <li class="email list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="office list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
            </div>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return`
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class= "card-header p-3 mb-2 bg-primary text-white">
            <h3>${engineer.name}</h3>
            <h4><span class="material-icons"> laptop_mac</span> Engineer </h4>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush card">
            <li class="id list-group-item">ID: ${engineer.id}</li>
            <li class="email list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="github list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
        </div>
    </div>
    </div>
    `;
}

const createIntern = function (intern) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header p-3 mb-2 bg-primary text-white">
                <h3>${intern.name}</h3>
                <h4><i class="material-icons">school</i> Intern </h4>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush card">
                <li class="id list-group-item">ID: ${intern.id}</li>
                <li class="email list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="school list-group-item">School: ${intern.school}</li>
            </ul>
            </div>
    </div>
    </div>
    `;
}

generatePageHTML = (data) => {
    dataArray = [];

    for (let i = 0; i < data.length; i++ ){
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager"){
            const managerDataCard = createManager(employee);

            dataArray.push(managerDataCard);
        }

        if (role === "Engineer"){
            const engineerDataCard = createEngineer(employee);

            dataArray.push(engineerDataCard);
        }

        if (role === "Intern"){
            const internDataCard = createIntern(employee);

            dataArray.push(internDataCard);
        }
    }

    const employeeCards = dataArray.join('')

    const createTeam = generateMyTeamPage(employeeCards);
    return createTeam;
}

const generateMyTeamPage = function(employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BUILD_A_TEAM</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="p-3 mb-2 text-center bg-danger text-white w-100 h1"> My Team </span>
            </nav>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="employeeCards">
                        ${employeeCards}
                    </div>
                </div>
            </main>
        </header>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
`;
}

// export to index
module.exports = generatePageHTML; 

   