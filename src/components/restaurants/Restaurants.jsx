import React, { useEffect, useState } from "react";
import './Restaurants.css'
import RestaurantCard from "./cards/RestaurantCard";



function Restaurants() {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/restaurants/")
            .then(res => res.json())
            .then((data) => setRestaurantData(data))
            .catch((error) => console.log("error while /restaurants", error))
    }, []);

    return <div id="restaurants">
        {restaurantData.map(restData => <RestaurantCard restData={restData} key={restData.name}></RestaurantCard>)}
    </div>
}



export default Restaurants;