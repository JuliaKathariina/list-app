import "./Input.css";


function Input({ setInputFieldData, filterList }) {

    const inputValue = (e) => {
        setInputFieldData(e.target.value)
        filterList();
    }

    return (

        <div class="search_div">
            <input class="search_input"  name="text"  type="text" placeholder='Search for Items...' onChange={inputValue} />
            <div class="search_button">
            
            </div>
        </div>
    )
}




export default Input