import {useState} from 'react';
import {searchAPI1, searchAPI2} from "../utils/links.js";
import {normalizeRestaurant} from "../utils/normalizeFunction.js"
import { resList } from '../utils/lists.js';
// import cardBox from "./CardBox.js";
const SearchBar = ({setResList,resList})=>{
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      const now = new Date();
      function getTime(){
        const end = new Date().toLocaleTimeString();
        // return end-now.toLocaleTimeString()
        return end;
      }

      const [content, setContent] = useState("Search nearby restaurents...");
      
    const disc =  getRandomArbitrary(10,80);
    const dissc = Math.ceil(disc);
    const TimeRemain = 1000;
    // setInterval(getTime(),1000);

        return(
        <div className= "searchBar" >

            <input type="text" value={content} 
            onClick={
              ()=>{
                setContent("");
              }
            }
            onChange={
               ()=>{
                setContent(document.querySelector(".searchBar input").value);
              }
            }/>
            <button className="searchButton" onClick = {
              
              async ()=>{
                const req= searchAPI1+content+searchAPI2;
                const data = await fetch(req);
                const json = await data.json();
                console.log(json);
                const rests=json.data.suggestions;
                const normalized = rests.map(normalizeRestaurant);

setResList(normalized);
                // setResList(json.data.suggestions);
                // cardBox.searchFun(json);
              }
            }
            > <i className="fa-solid fa-search" ></i></button>
            <button className="ratingButton" onClick={()=>{
              const newList= resList.filter((item)=>{
                return item.info.avgRating > 4.5;
              })
              setResList(newList);
            }}>Top rated restaurents</button>
            <div id="discountBtn">
                <h3>Discount: {dissc}%</h3> <br/>
                <h3>Offer Ends In: {TimeRemain}</h3>
            </div>
        </div>
                // <a href="">Search icons created by Freepik - Flaticon</a>
    );
};
export default SearchBar;