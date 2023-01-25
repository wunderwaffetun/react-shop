import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Shop from "./layout/Shop";
import React from "react";
import ShopContextWrapper from "./Context";


function App() {
  return <>
      <Header/>
      <ShopContextWrapper>
        <Shop/>
      </ShopContextWrapper>
      <Footer/>
    </>
}

export default App;
