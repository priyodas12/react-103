import React from "react";
import './RestaurantCard.css';


function RestaurantCard({ restData }) {
    const { _id, name, offer, location, imageUrl, cuisine, isOpen, rating, description } = restData;

    return <div className="card">
        <div className="card-image">
            <img src={imageUrl} alt={`${_id}_${name}`} />
        </div>

        <div className="card-text">
            <h3 id="rest-name">{name}</h3>
            <hr />
            <p><label className="card-text-label">Description:</label> {description}</p>
            <p><label className="card-text-label">Special:</label> {cuisine}</p>
            <p><label className="card-text-label">Offer:</label> {offer}</p>
            <p><label className="card-text-label">Ratings:</label> {rating}</p>
            <p><label className="card-text-label">Location:</label> {location}</p>
            <p><label className="card-text-label">Status:</label>{isOpen ? "Open" : "Closed"}</p>
        </div>
    </div>
}

export default RestaurantCard;