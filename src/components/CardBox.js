import {useState, useEffect} from 'react';
// import {resListAPIUrl } from "../utils/links.js";
// import {useState, useEffect} from 'react';
import {resList} from "../utils/lists.js";


const Card =({props})=>{
    // {{console.log(props);}}
    const CDN_URL =
"https://media-assets.swiggy.com/swiggy/image/upload/";
        return(
            <div className="card">
                <img src = {CDN_URL+props.info.cloudinaryImageId} style={{height:"220px",width:"240px",marginTop:"10px",borderRadius:"20px"}}></img>
                <h1 style={{fontSize:"20px"}}>{props.info.name}</h1>
                <h2 style={{fontSize:"15px"}}>Address: {props.info.locality}</h2>
                <h2 style={{fontSize:"15px"}}>Closes in: {props.info.availability.nextCloseTime}</h2>
                <h4>Cuisine: {props?.info?.cuisines.map((item)=>{
                    return item + ", ";
                })}</h4>
                <h3 >Cost: {props.info.costForTwo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.info.avgRating}⭐</h3>
          </div>
        );
    };
    
    
    const CardBox = ({resList})=>{
        // const [restList, setRestList] = useState(resList);
        // useEffect( ()=>{
        // //    function fetchData(){
        // //     // const rests = await fetch(resListAPIUrl);
        // //    const  rests= resList;
        // //    setRestList(rests);
        // //     // setRestList(await rests.json());
        // //    }
        //     //   fetchData();
        // },[]);
        // const searched= false;
        // function searchFun(data){
        //     setRestList(data.data.suggestions);
        //     searched= true;
        // }
        console.log(resList);
        console.log(Array.isArray(resList));
        console.log(typeof resList);
        return(
            <div className="cardBox">
    
                {
                   
                  resList.map((item) =>
                     <Card key={item.info.id} props={item} />
                    // else <Card key = {item.data.suggestions.}
                )}
            </div>
        );
    };

    export default CardBox;

// import { useState, useEffect } from 'react';
// import { resList } from "../utils/lists.js";

// const Card = ({ info, distance }) => {
//     return (
//         <div className="card">
//             <img 
//               src={info.image.url} 
//               style={{ height: "220px", width: "240px", marginTop: "10px", borderRadius: "20px" }} 
//             />
//             <h1 style={{ fontSize: "10px" }}>{info.name}</h1>
//             <h2 style={{ fontSize: "15px" }}>Address: {info.locality.name}</h2>
//             <h2 style={{ fontSize: "15px" }}>timings: {info.timing.text}</h2>
//             <h3>
//               Distance: {distance} &nbsp;&nbsp;&nbsp;&nbsp;
//               {info.rating.rating_text} ⭐
//             </h3>
//         </div>
//     );
// };

// const CardBox = () => {
//     const [restList, setRestList] = useState([]);

//     useEffect(() => {
//         const rests = resList;
//         setRestList(rests);
//     }, []);

//     return (
//         <div className="cardBox">
//             {restList.map((item) => (
//                 <Card 
//                   key={item.info.resId} 
//                   info={item.info} 
//                   distance={item.distance} 
//                 />
//             ))}
//         </div>
//     );
// };

// export default CardBox;