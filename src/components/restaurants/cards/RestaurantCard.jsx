import React from "react";
import './RestaurantCard.css';


function RestaurantCard({ restData }) {
    const { restName, restAddress, imageUrl, cuisine, isOpen } = restData;
    let cuisineList = cuisine.join(",")
    return <div className="card">
        <div className="card-image">
            <img src={imageUrl} alt={restName} />
        </div>

        <div className="card-text">
            <h3>{restName}</h3>
            <p>{cuisineList}</p>
            <p>{isOpen ? "Open" : "Closed"}</p>
            <p>{restAddress}</p>
        </div>
    </div>
}

export default RestaurantCard;