import React from "react";
import { useRestaurants } from "../../hooks/RestaurantHook";
import RestaurantCard from "./cards/RestaurantCard";
import './Restaurants.css'



function Restaurants() {

    const { restaurants, loading, error } = useRestaurants();

    if (loading) {
        return <div> Loading Restaurants </div>
    }
    if (error) {
        return <div>Error while Loading Restaurants</div>
    }

    return <div id="restaurants">

        {restaurants.sort((rest1, rest2) => rest1.location.localeCompare(rest2.location)).map(restData =>
            <RestaurantCard restData={restData} key={restData._id}></RestaurantCard>
        )
        }
    </div>
}



export default Restaurants;