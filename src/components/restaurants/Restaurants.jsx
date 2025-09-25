import React from "react";
import './Restaurants.css'
import RestaurantCard from "./cards/RestaurantCard";



function Restaurants(){
    return <div id="restaurants">
       <p>Restaurants cards</p>
       <RestaurantCard></RestaurantCard>
       <RestaurantCard></RestaurantCard>
       <RestaurantCard></RestaurantCard>
       <RestaurantCard></RestaurantCard>
    </div>
}

export default Restaurants;