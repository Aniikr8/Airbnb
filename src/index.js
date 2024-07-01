import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"
export default function App() {
    console.log(data);
 const items = data.map(item =>
    
{

return <Card  img = {item.coverImg} 

    item = {item}
/>
}


    )
   console.log(items)
    return (
      
        <div>
        
      <Navbar />
      <Hero />
      <div className="card-container">{items}</div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))