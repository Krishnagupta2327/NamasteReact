import SearchBar from "./SearchBar";
import CardBox from "./CardBox";
import { useState, useEffect } from "react";
import { swiggyApi1 } from "../utils/links";
import { normalizeRestaurant } from "../utils/normalizeFunction";   


const PageBody = ()=>{
    const [resList, setResList] = useState([]);
    useEffect(()=>{
        async function fetchRestaurents(){
            const data= await fetch(swiggyApi1);
            const json = await data.json();
            // console.log(json);
            const rests= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const normalized= rests.map(normalizeRestaurant);
            // console.log(rests);
            setResList(normalized);
        }
        fetchRestaurents()},[]);
    return (
        <div className="PageBody">
            <SearchBar setResList ={setResList} resList={resList}/>
            <CardBox resList ={ resList} />

        </div>
    );
};
export default PageBody;