import React from "react";
import './RestaurantCard.css';


function RestaurantCard({ restData }) {
    const { restName, restAddress, imageUrl, cuisine, isOpen, rating } = restData;
    let cuisineList = cuisine.join(",")
    return <div className="card">
        <div className="card-image">
            <img src={imageUrl} alt={restName} />
        </div>

        <div className="card-text">
            <h3>{restName}</h3>
            <p>Special: {cuisineList}</p>
            <p>Ratings: {rating}</p>
            <p>Location: {restAddress}</p>
            <p>{isOpen ? "Open" : "Closed"}</p>
        </div>
    </div>
}

export default RestaurantCard;