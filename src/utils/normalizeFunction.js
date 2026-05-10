export function normalizeRestaurant(item) {

    // NORMAL API
    if(item?.info) {

        return {
            info: {

                id:
                    item.info.id,

                name:
                    item.info.name,

                cloudinaryImageId:
                    item.info.cloudinaryImageId,

                locality:
                    item.info.locality,

                cuisines:
                    item.info.cuisines || [],

                avgRating:
                    item.info.avgRating,

                costForTwo:
                    item.info.costForTwo,

                availability:
                    item.info.availability || {}
            }
        };
    }

    // SEARCH API
    const add= ["Raj Nagar","Oppulent Mall","Indirapuram","Vaishali","Ghaziabad","Noida","Greater Noida"];
    const costs= [200,300,400,500,600,700,800];
    const index =
        Math.floor(Math.random() * add.length);
        const costIndex= Math.floor(Math.random() * costs.length);
    const idd= item?.restaurantId || Math.random().toString(36).substring(2, 9);
    const cuisines2D = [
        ["North Indian", "Mughlai", "Biryani"],
        ["South Indian", "Dosa", "Idli"],
        ["Chinese", "Thai", "Asian"],
        ["Pizza", "Italian", "Pasta"],
        ["Burger", "Fast Food", "Fries"],
        ["Bakery", "Desserts", "Ice Cream"],
        ["Street Food", "Chaat", "Snacks"],
        ["Cafe", "Beverages", "Sandwich"],
        ["Healthy Food", "Salads", "Juices"],
        ["Mexican", "Tacos", "Burritos"],
        ["Japanese", "Sushi", "Ramen"],
        ["Continental", "European", "Grill"],
        ["Punjabi", "Paratha", "Kebabs"],
        ["Seafood", "Coastal", "Fish Curry"],
        ["Arabian", "Shawarma", "Lebanese"]
    ];
    const cuiIndex= Math.floor(Math.random() * cuisines2D.length);
    const closeTimes = [
        "10:00 PM",
        "10:30 PM",
        "11:00 PM",
        "11:30 PM",
        "12:00 AM",
        "12:30 AM",
        "1:00 AM",
        "Open 24 Hours",
        "Closes Soon",
        "2:00 AM"
    ];
    const closeTimeIndex = Math.floor(Math.random() * closeTimes.length);
    const rating = (Math.random() * (5 - 3.5) + 3.5)
    .toFixed(1);

    return {


        info: {

            id:
                item.restaurantId || idd,

            name:
                item.text,

            cloudinaryImageId:
                item.cloudinaryId,

            locality:
                item.locality || add[index],

            cuisines:
                item.cuisines || cuisines2D[cuiIndex],

            avgRating:
                item.avgRating|| rating,

            costForTwo:
                item.costForTwo || "₹"+costs[costIndex]+" for two",

            availability:
                item?.orderability?.availability || { nextCloseTime: closeTimes[closeTimeIndex] }
        }
    };
}