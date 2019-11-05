import React from 'react';

const ResultsList = ({resultsList}) => {
    return(
        <div>
            {resultsList.map((starship) => (
                <div class="card">
                <div class="card-body">
                  <h4 class="card-name-title">{starship.name}</h4>
                  <h5 class="card-model-title mb-2 text-muted">Model: {starship.model}</h5>
                  <h5 class="card-class-title">Class: {starship.starship_class}</h5>
                  <h6 class="card-cost-title">Cost: {starship.cost_in_credits}</h6>
                  <p class="card-crew-title">Crews: {starship.crew}</p>
                  <p class="card-passengers-title">Passengers: {starship.passengers}</p>
                </div>
              </div>
            ))}
        </div>
    );
};

export default ResultsList;