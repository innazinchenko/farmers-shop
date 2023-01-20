import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Food from "./Food";




function Home() {
  
    const [products, setProducts] = useState(data);
    
    const chosenProduct = (searchTerm) => {
      const newProduct = data.filter(element => element.searchTerm === searchTerm);
      setProducts(newProduct);
    }
    
      return (
        <div>
            <div className="container">
              <h2 className="shipping">Free Shipping for all!</h2>
            </div>
          <Buttons filteredProducts={chosenProduct}/>
          <Food itemsForSale={products}/>
        </div>
      );
    }
    
    
    export default Home;