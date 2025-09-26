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

//todo: removed while actual API call
function getImageUrl() {
    let images = [

        'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
        'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
        'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
        'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg',
        'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg',
        'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg',
        'https://images.pexels.com/photos/2569760/pexels-photo-2569760.jpeg',
        'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg',
        'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg',
        'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
        'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
        'https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg',
        'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg',
        'https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg'
    ];
    return images[Math.floor(Math.random() * images.length)]
}

//todo: removed while actual API call
function getRestaurantData() {
    return {
        restName: faker.company.name(),
        restAddress: faker.location.streetAddress(),
        cuisine: [faker.food.ethnicCategory(), faker.food.ethnicCategory(), faker.food.ethnicCategory()],
        imageUrl: getImageUrl(),
        isOpen: faker.number.int(3, 10) < 8,
        rating: Math.round(Math.random() * 9)
    };
}

export default Restaurants;