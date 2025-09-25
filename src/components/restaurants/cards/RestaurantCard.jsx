import React from "react";
import './RestaurantCard.css';
import uuid4 from "uuid4";
import image1 from "../../../public/images/1.jpg"

function RestaurantCard(){
    let restId=uuid4();
    return <div id='restaurant-card' style={{ "--card-background-image": `url(${image1})`}} >
        <p>{restId}</p>
    </div>
}

export default RestaurantCard;