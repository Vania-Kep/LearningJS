import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { ShippingCartContextProvider } from './store/shopping-cart-context.jsx';

function App() {
  return (
    <ShippingCartContextProvider>
      <Header/>
      <Shop/>
    </ShippingCartContextProvider>
  );
}

export default App;
