import './App.css';

import styled from 'styled-components';
import Input from './Components/Input.js';
import Items from './Components/Items.js';
import { useEffect, useState } from 'react';
import { setLocalStorage, loadLocalStorage } from './Components/Local.js';
import ShoppingCart from './Components/ShoppingCart.js';
import { search } from "fast-fuzzy";
import Header from './Components/Header';


function App() {
  
  const [data, setData] = useState(loadLocalStorage("itemList") ?? []);
  const [filter, setFilter] = useState([]);
  const [InputFieldData, setInputFieldData] = useState("");

  const [Cart, setCart] = useState(loadLocalStorage("cartlist") ?? []);


  const toShoppingCart = (itemName) => {
    setCart([...Cart, itemName])
    setFilter(filter.filter((item) => item !== itemName));
    setData(data.filter((item) => item !== itemName));
  }

  const removeFromShoppingCart = (active) => {
    setCart(Cart.filter((item) => item !== active));
    setFilter([active, ...filter]);
    setData([active, ...data]);
  }

  useEffect(() => {
    const url = "https://fetch-me.vercel.app/api/shopping/items";
    fetchData();
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
    }
  }, [])


  useEffect(() => {
    setLocalStorage("itemList", data);
    setLocalStorage("cartlist", Cart);
  }, [data, Cart])

  const filterList = () => {
    const results = search(InputFieldData, data, {
      keySelector: ({ name }) => name.de,
    });
    setFilter(results);
  }



  return (
    <div className="App">
      <MainContent>

        <Header />
        <ShoppingCart Cart={Cart} removeFromShoppingCart={removeFromShoppingCart} />
        <Input InputFieldData={InputFieldData} setInputFieldData={setInputFieldData} filterList={filterList} />
        <Items filter={filter} toShoppingCart={toShoppingCart} />

      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
background-color: var(--bodyColor);
height: 100vh;
`

export default App;