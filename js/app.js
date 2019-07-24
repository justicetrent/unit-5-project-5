const newDiv = document.createElement("div");
newDiv.innerHTML = `<div class="card-img-container">
                    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">first last</h3>
                    <p class="card-text">email</p>
                    <p class="card-text cap">city, state</p>
                </div>`

const gallery = document.getElementById('gallery')
gallery.appendChild(newDiv)