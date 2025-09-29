// create vanilla js function for fetching the data

export async function fetchRestaurantsData() {
    try {
        console.log("calling rest service...")
        const response = await fetch("http://localhost:3001/api/v1/restaurants/")
                    .then(res => res.json());

        return response;        
    } catch (error) {
        console.log("Exception : fetch restaurant data")
        throw error;
    }
}