import React from 'react';

const ListItems = ({listItems}) => {
    return(
        <div>
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

export default ListItems;