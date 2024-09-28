import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';  

function App() {
  const [cartItems, setCartItems] = useState([]);  

  const addItemToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <NavBar totalItemsInCart={totalItemsInCart} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category/:value" element={<ItemListContainer />} /> {/* Filtro por categoría */}
        <Route path="/product/:id" element={<ItemDetailContainer addItemToCart={addItemToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<CheckOut cartItems={cartItems} />} />  
      </Routes>
    </div>
  );
}

export default App;
