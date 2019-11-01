import React from 'react';

const ListItems = ({listItems}) => {
    // console.log("starships: " + starships.toString());

    return(
        <div>
            <center><h1>Star Wars Search</h1></center>
            {listItems.map((starship) => (
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{starship.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Model: {starship.model}</h6>
                  <p class="card-text">Crews: {starship.crew}</p>
                </div>
              </div>
            ))}
        </div>
    );
};

export default ListItems