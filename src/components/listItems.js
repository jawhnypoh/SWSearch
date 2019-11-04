import React from 'react';

const ListItems = ({listItems}) => {
    return(
        <div>
            {listItems.map((starship) => (
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{starship.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Model: {starship.model}</h6>
                  <p className="card-text">Crews: {starship.crew}</p>
                </div>
              </div>
            ))}
        </div>
    );
};

export default ListItems;