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
            <p><label className="card-text-label">Description:</label> {description}</p>
            <p><label className="card-text-label">Special:</label> {cuisine}</p>
            <p><label className="card-text-label">Ratings:</label> {rating}</p>
            <p><label className="card-text-label">Location:</label> {location}</p>
            <p><label className="card-text-label">Status:</label>{isOpen ? "Open" : "Closed"}</p>
        </div>
    </div>
}

export default RestaurantCard;