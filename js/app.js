
//Selecting 12 random employee's from the API section (Gallery)
//declared two variables. One to hold the information of each of the 12 random employee's, 
//and another to hold the data/personal information necessary for each of the employee's being displayed.
let data; 
let employee;
// Used the fetch method to gather the employee information from a random employee API,
// & created a function to store all of the information being generated.
function randomEmployee(){
    fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json()) // in the first promise, utilized json as a container that travels from the fetch API to my webpage. 

    .then(function(data){ // second promise, holds the all of the data that needs to be displayed for each employee.
        //used forEach to iterate through all of the information that needs to be displayed per employee.
        
        eachEmployee = data.results
        eachEmployee.forEach(employee => {
           let picture = employee.picture.large
           let firstName = employee.name.first
           let lastName = employee.name.last
           let email = employee.email
           let state = employee.location.city
           let city = employee.location.state
           // dynamically created the HTML necessary for this project in js. using backtick syntax, template literals, and jquery.
           // This HTML markup allows all of the information that is being accessed in thet API to be displayed on the webpage. 
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

// MODAL SECTION 
// Is basically identical to the Identical to the HTML markup that displays the employee information that was fetched from the API
//There is more information that is displayed in each employee's modal display than is displayed on the regular home page.
function modalDisplay(i) {
    $('body').append(
        `<div class="modal-container">
            <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${eachEmployee[i].picture.large}" alt="Employee Picture">
                <h3 id="name" class="modal-name cap">${eachEmployee[i].name.first}, ${eachEmployee[i].name.last}</h3>
                <p class="modal-text">${eachEmployee[i].email}</p>
                <p class="modal-text cap">${eachEmployee[i].location.city}</p>
            <hr>
            <p class="modal-text">${eachEmployee[i].phone}</p>
            <p class="modal-text cap">${eachEmployee[i].location.street}, ${eachEmployee[i].location.city}, ${eachEmployee[i].location.state}, ${eachEmployee[i].location.postcode}</p>
            <p class="modal-text">Birthday: ${eachEmployee[i].dob.date.slice(5, 7) + '/' + eachEmployee[i].dob.date.slice(8, 10) + '/' + eachEmployee[i].dob.date.slice(0, 4)}</p>
        </div>
        </div>`)

    
    $('#modal-close-btn').on('click', function () {
    $('.modal-container').remove();
    });
}



//This click event will make the modal for each individual employee appear on the screen. 

$('#gallery').on ('click', ".card", function () {
    i = ($(this).index());
    modalDisplay(i);
});





