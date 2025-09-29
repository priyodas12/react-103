// create vanilla js function for fetching the data

import { EXPRESS_RESTAURANT_API }from '../util/constant.js'

export async function fetchRestaurantsData() {
    try {
        console.log("calling rest service...")
        const response = await fetch(EXPRESS_RESTAURANT_API)
                    .then(res => res.json());

        return response;        
    } catch (error) {
        console.log("Exception : fetch restaurant data")
        throw error;
    }
}