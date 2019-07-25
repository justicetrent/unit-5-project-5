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


// div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">name</h3>
//                         <p class="modal-text">email</p>
//                         <p class="modal-text cap">city</p>
//                         <hr>
//                         <p class="modal-text">(555) 555-5555</p>
//                         <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//                         <p class="modal-text">Birthday: 10/21/2015</p>
//                     </div>
//                 </div>

//let modal;

function modalDisplay(i) {
    //let dateOfBirth = eachEmployee[i].dob.date;
    //dateOfBirth = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);
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

    //const picture = eachEmployee.picture.large;
    //const firstName = dateOfBirth.name.first;
    // const lastName = jsonData[i].name.last;
    // const email = jsonData[i].email;
    // const phone = jsonData[i].phone;
    // const street = jsonData[i].location.street;
    // const city = jsonData[i].location.city;
    // const state = jsonData[i].location.state;
    // const zipCode = jsonData[i].location.postcode;

    //This will reorder the DOB using the slice method - (Steve)
   


    
    //This will add the HTML elements of the employee's info to the modal window pop up (copied from index.html)
    //const modal =

        

        //Appends HTML to the modal window pop up and closes when clicked.

        
        //Closes modal pop up and removes HTML elements
        $('#modal-close-btn').on('click', function () {
        $('.modal-container').remove();
    });
}



//This will make the modal pop up window show an individual employee when clicked

$('#gallery').on ('click', ".card", function () {
    i = ($(this).index());
    modalDisplay(i);
});





