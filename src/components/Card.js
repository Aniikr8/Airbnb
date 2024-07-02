import React from "react"

    function Card(props){
    // console.log(props);
    if(props.item)
    // console.log(props.openSpots)
   var textContent = "";
    if(props.item.openSpots === 0){

         textContent = "SOLD OUT";
    }
    else if(props.item.location === "Online"){
    textContent = "ONLINE"
    }
        return(
            <div className = "card">
        
            <div className = "imgsection">
            {textContent && <div className="tag">{textContent}</div>}
            <img src={"./images/" + props.item.coverImg} />
            
            </div>
            <div className="textsection">
            <img src ="./images/star.png"/>
            <span className="star-text">{props.item.stats.rating} <span> ({props.item.stats.reviewCount})-USA</span></span>
            
            </div>
            <p className="first">{props.item.title}</p>
            <p className="second">From ${props.item.price} / <span className="color-blue">person</span></p>
            </div>

        )

}
export default Card