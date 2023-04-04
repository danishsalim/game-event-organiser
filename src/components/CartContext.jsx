import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [games, setGames] = useState([
    { id: 1, name: "Hi Stricker", selected: false, price: 1000 },
    { id: 2, name: "Puch Challange", selected: false, price: 500 },
    { id: 3, name: "Bow & Arrow", selected: false, price: 1500 },
    { id: 4, name: "Catch Fish", selected: false, price: 2000 },
  ]);

  const [cart, setCart] = useState([]);

  const [orderData, setOrderData] = useState("");

  const transportData = [
    {
      Id: 1,
      name: "Baghajatin, Kolkata, WB",
      Distance: "10km",
    },
    {
      Id: 2,
      name: "Garia, Kolkata, WB",
      Distance: "20km",
    },
    {
      Id: 3,
      Name: "Sealdaha, Kolkata, WB",
      Distance: "15km",
    },

    {
      Id: 4,
      name: "Jadavpur, Kolkata, WB",
      Distance: "25km",
    },
  ];

  const handleGameSelection = (id) => {
    const updatedGames = games.map((game) => {
      if (game.id === id) {
        return { ...game, selected: !game.selected };
      }
      return game;
    });
    setGames(updatedGames);
  };
  //   console.log(games);

  const handleAddToCart = () => {
    const updatedCart = games.filter((game) => game.selected);
    setCart(updatedCart);
    // console.log(cart);
  };

  return (
    <CartContext.Provider
      value={{
        games,
        cart,
        handleGameSelection,
        handleAddToCart,
        orderData,
        setOrderData,
        transportData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
