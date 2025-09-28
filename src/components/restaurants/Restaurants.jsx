import React, { useEffect, useState } from "react";
import './Restaurants.css'
import RestaurantCard from "./cards/RestaurantCard";



function Restaurants() {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/restaurants/")
            .then(res => res.json())
            .then((data) => setRestaurantData(data))
            .catch((error) => console.log("error while fetching data from /api/v1/restaurants", error))
    }, []);

    return <div id="restaurants">

        {restaurantData.sort((rest1, rest2) => rest1.location.localeCompare(rest2.location)).map(restData =>
            <RestaurantCard restData={restData} key={restData._id}></RestaurantCard>
        )
        }
    </div>
}



export default Restaurants;