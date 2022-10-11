import './App.css';

import styled from 'styled-components';
import Input from './Components/Input.js';
import Items from './Components/Items.js';
import { useEffect, useState } from 'react';
import { setLocalStorage, loadLocalStorage } from './Components/Local.js';
import ShoppingCart from './Components/ShoppingCart.js';
import { search } from "fast-fuzzy";
import Header from './Components/Header';
import { ThemeContext, themes } from './Components/Darkmode.js';

function App() {
  
  const [data, setData] = useState(loadLocalStorage("itemList") ?? []);
  const [filter, setFilter] = useState([]);
  const [InputFieldData, setInputFieldData] = useState("");
  const [theme, setTheme] = useState(themes.dark);
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

  function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);
  
    function changeTheme(theme) {
      setTheme(theme);
    }
  
    useEffect(() => {
      switch (theme) {
        case themes.light:
          document.body.classList.add('white-content');
          break;
        case themes.dark:
        default:
          document.body.classList.remove('white-content');
          break;
      }
    }, [theme]);
  

  return (
    <div className="App">
      <Main>
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
   
        <Header />
        <ShoppingCart Cart={Cart} removeFromShoppingCart={removeFromShoppingCart} />
        <Input InputFieldData={InputFieldData} setInputFieldData={setInputFieldData} filterList={filterList} />
        <Items filter={filter} toShoppingCart={toShoppingCart} />
        </ThemeContext.Provider>
      </Main>
    </div>
  );
}

const Main = styled.div`
background-color: rosa;
height: 100vh;
`

export default App;