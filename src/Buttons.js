function Buttons ({filteredProducts}){
    return (
        <div className="container">
          <button className="change" onClick={()=> filteredProducts("vegetables")}>Vegetables</button>
          <button className="change" onClick={()=> filteredProducts("milk")}>Milk and milk products</button>
          <button className="change" onClick={()=> filteredProducts("bread")}>Bread</button>
          <button className="change" onClick={()=> filteredProducts("fruits")}>Fruits</button>
        </div>
    )
}

export default Buttons;
