import { useState } from "react";

function Slider({farmersPhoto}) {
    const [family, setFamily] = useState(0);
    
const previousPhoto = () =>{
    setFamily ((family => {
        family--;
        if (family < 0){
            return farmersPhoto.length - 1
        }
        return family;
    }))
}

const nextPhoto = () => {
    setFamily((family =>{
        family++;
        if (family > farmersPhoto.length -1){
            family = 0
        }
        return family;
    }))
}

return (

    <div>
        <div className="container">
        <button className="btn" onClick={previousPhoto}>Prev photo</button>
         <img src = {farmersPhoto[family]} width ="400px" alt="our family"/>
         <button className="btn" onClick={nextPhoto}>Next photo</button>
       </div>
  </div>
)
}
export default Slider;