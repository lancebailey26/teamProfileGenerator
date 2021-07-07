function employedPeople(team){
    let returner = "";
    team.forEach((employee) => {
    returner = returner + cardCreator(employee)
});
return returner;
}
function cardContent(employee){
    let returner = ""
    let role = employee.getRole();

    switch (role){
        case "Manager":
            returner = `<h7> Office Number: ${employee.officeNumber} </h7>`;
            break;
        case "Engineer":
            returner = `<h7> Github: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></h7>`
            break;
        case "Intern":
            returner = `<h7> School: ${employee.getSchool()} </h7>`
            break;
    }
    return returner
}
function cardCreator(employee){
    let returner = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
      <p class="card-text">${employee.getId()}</p>
      ${cardContent(employee)}
    </div>
  </div>`
  return returner
}

function generateHTML(employee){
   const generatedHTML =  
`<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    ${employedPeople(employee)}
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    </body>
</html>`
return generatedHTML;
}
module.exports = generateHTML