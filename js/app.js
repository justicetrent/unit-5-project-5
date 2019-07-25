//const newDiv = document.createElement("div");
// newDiv.innerHTML = `<div class="card-img-container">
//                     <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
//                 </div>
//                 <div class="card-info-container">
//                     <h3 id="name" class="card-name cap">first last</h3>
//                     <p class="card-text">email</p>
//                     <p class="card-text cap">city, state</p>
//                 </div>`

// let gallery = document.getElementById('gallery')
//         gallery.appendChild(newDiv)

let data;
let employee;
function randomEmployee(){
    fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())

    .then(function(data){
        //console.log(data);
         eachEmployee = data.results
        eachEmployee.forEach(employee => {
           let picture = employee.picture.large
           let firstName = employee.name.first
           let lastName = employee.name.last
           let email = employee.email
           let state = employee.location.city
           let city = employee.location.state
           
            const newDiv = `<div class="card"><div class="card-img-container">
            <img class="card-img" src=${picture} alt="profile picture">
            </div>
            <div class="card-info-container">
            <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
            </div>`
            $("#gallery").append(newDiv);
        })

    })

}
randomEmployee();