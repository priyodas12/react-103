import { useEffect, useState } from "react";
import { fetchRestaurantsData } from "../service/restaurantService";

// create custom hook;
export function useRestaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("exec useEffect")
        // mounting means the initial creation and insertion of a component into the DOM.
        // Mounting → when the component is created & added to the DOM
        // Updating → when the component re-renders because: props,state and rerender
        // Unmounting → when the component is removed from the DOM
        let isMounted = true;
        async function loadRestData() {
            try {
                const restData = await fetchRestaurantsData();
                if (isMounted) { // update component state if its mounted
                    setRestaurants(restData);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        loadRestData();
        return () => {
            isMounted = false;
        };
    }, []);



    return { restaurants, loading, error };
}