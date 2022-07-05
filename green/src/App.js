import "./App.css";
import Header from "./components/Layout/Header";
import React, { Fragment, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OurFounder from "./components/About/OurFounder";
import About from "./components/About/About";
import AvailablePlants from "./components/Plants/AvailablePlants";
import Plants from "./components/Plants/Plant";
import JoinUs from "./components/JoinUs";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Cart/CartProvider";

import BottomNavigation from "@mui/material/BottomNavigation";
import StartingPage from "./components/StartContent/StartingPage";
import AuthForm from "./components/StartContent/AuthForm";
import AuthContext from "./context/AuthContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ctx = useContext(AuthContext);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!ctx.isLoggedIn && <StartingPage/>}
              {ctx.isLoggedIn && <Header onShow={showCartHandler} />}

              {ctx.isLoggedIn &&<Plants />}
              {cartIsShown && <Cart onHide={hideCartHandler} />}
            </>
          }
        ></Route>

        {ctx.isLoggedIn && <Route path="/founder" element={<OurFounder />}></Route>}
        {ctx.isLoggedIn && <Route path="/about" element={<About />}></Route>}
        {ctx.isLoggedIn && <Route path="/joinus" element={<JoinUs />}></Route>}
        

        <Route path="/form" element={<AuthForm />}></Route>
        <Route path="*" element ={<Navigate replace to= '/'/>}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
