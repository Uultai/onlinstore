import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MainRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
      <Footer />
    </>
  );
}

export default App;
