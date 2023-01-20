function Food({itemsForSale}) {
    return (
        <div className="product-cards">
         {itemsForSale.map((element => {
            const {id, name, price, image} = element;
            return(
                <div className="card" key={id}>

                  <img src={image} alt="food" width="400px" height="480px"/>

                   <div className="product-info">
                    <h3>{name}  </h3>
                    <h4> $ {price}</h4>
                   </div>

                </div>
            )
        }))} 
        </div>
      );
}

export default Food;
