import "./Items.css";

function Items({ filter, toShoppingCart }) {

    return (
        <div className="BodyPostion">
            <div class="search_div">
            {
                filter.map((itemName) => { return <button  class="search_input" key={itemName._id} onClick={() => toShoppingCart(itemName)}>{itemName.name.de}</button> })
            }
            <div class="search_button">
             <div class="fa-solid fa-magnifying-glass"></div>
             </div>
            </div>
        </div>
    )
}




export default Items