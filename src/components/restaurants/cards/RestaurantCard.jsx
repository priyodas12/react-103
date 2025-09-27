import React from "react";
import './RestaurantCard.css';


function RestaurantCard({ restData }) {
    const { name, location, imageUrl, cuisine, isOpen, rating, description } = restData;

    return <div className="card">
        <div className="card-image">
            <img src={imageUrl} alt={name} />
        </div>

        <div className="card-text">
            <h3>{name}</h3>
            <hr />
            <p>Description: {description}</p>
            <p>Special: {cuisine}</p>
            <p>Ratings: {rating}</p>
            <p>Location: {location}</p>
            <p>{isOpen ? "Open" : "Closed"}</p>
        </div>
    </div>
}

export default RestaurantCard;