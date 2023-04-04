import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Games = () => {
  const { games, handleGameSelection, handleAddToCart } =
    useContext(CartContext);
  return (
    <div className="games-container">
      <h2>Please select a game to add to your cart:</h2>
      <h2>Games</h2>
      <ul className="games-list">
        {games.map((game) => (
          <li
            key={game.id}
            className={game.selected ? "selected" : ""}
            onClick={() => handleGameSelection(game.id)}
          >
            {game.name}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart()}>Add to cart</button>
     
        <Link to="/Checkout"> <button>Go to cart </button></Link>{" "}
     
    </div>
  );
};

export default Games;
