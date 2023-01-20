import { useState } from "react";
import { dataPhoto } from "./dataPhoto";
import Slider from "./Slider";


function Aboutus() {
    const [peoples] = useState(0);
    const { description, photo} = dataPhoto[peoples];
    const [showMore, setShowMore] = useState(false);

    return (
      <div>
        <h1>About us</h1>
      
      <Slider farmersPhoto={photo}/>

      <div className="container">
          <p>{showMore ? description : description.substring(0,170) + "...."}
          <button onClick={() => setShowMore(!showMore)} className="btn">{showMore ? "Show less" : "Show more"}</button>
          </p>
          </div>

      </div>
    );
  }
  
  export default Aboutus;
