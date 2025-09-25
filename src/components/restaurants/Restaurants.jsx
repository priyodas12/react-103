import React from "react";
import './Restaurants.css'
import RestaurantCard from "./cards/RestaurantCard";
import { faker } from "@faker-js/faker";


function Restaurants() {

    return <div id="restaurants">
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
        <RestaurantCard restData={getRestaurantData()}></RestaurantCard>
    </div>
}


function getImageUrl() {
    let images = [

    ];
    return images[Math.floor(Math.random() * images.length)]
}

function getRestaurantData() {
    return {
        restName: faker.company.name(),
        restAddress: faker.location.streetAddress(),
        cuisine: faker.food.ethnicCategory(),
        imageUrl: getImageUrl(),
        isOpen: faker.number.int(1, 10) < 8
    };
}

export default Restaurants;