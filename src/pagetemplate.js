var html="";

const returnHtml=data=>{
    for(i=0;i<data.length;i++){
        if(data[i].getRole()==='Manager'){
            html+=`
            <div class="col-lg-3 mb-2">
            <div class="card-body bg-danger">
            <h5 class="card-title">${data[i].getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            </div>
            <div class = "card-body bg-secondary">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></li>
            <li class="list-group-item">Office Number: ${data[i].officeNumber}</li>
            </ul>
            </div></div>`;
        } else if (data[i].getRole()==='Engineer') {
            html+=`
            <div class="col-lg-3 mb-2">
            <div class="card-body bg-info">
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            </div>
            <div class = "card-body bg-secondary">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data[i].github}" target="_blank">${data[i].github}</a></li>
            </ul>
            </div></div>`;
        } else {
            html+=`
            <div class="col-lg-3 mb-2">
            <div class="card-body bg-warning">
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            </div>
            <div class = "card-body bg-secondary">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></li>
            <li class="list-group-item">School: ${data[i].school}</li>
            </ul>
            </div></div>`;
        }
    }
 return html;
}

module.exports= data=>{
return `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Team-Profile-Generator</title>
        <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
    <header class="page-header text-center bg-success">
        <h1>Best Team Ever!</h1>
    </header>
    
    <div class="row">
    <div class="card-deck mx-auto" >
        ${returnHtml(data)}
    </div>
    </div>
   
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;

};