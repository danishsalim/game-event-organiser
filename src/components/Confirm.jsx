import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

const Confirm = () => {
  const { orderData, charge, games , setGames } = useContext(CartContext);
  const navigate = useNavigate()

  const handlehome =()=>{
      const updatedGames = games.map((game) => {
          return { ...game,selected:false};
      })
    
     setGames(updatedGames)
      navigate("/")
  }

  return (
    <div className="games-container">
      {orderData.location ? (
        <>
          <h2>Your Order Summery</h2>
          <ul className="games-list">
            <li>Event Start Date: {orderData["event-start-date"]}</li>
            <li>Event End Date: {orderData["event-end-date"]}</li>
            <li>Setup Date: {orderData["setup-date"]}</li>
            <li>Location: {orderData.location}</li>
            <li>Payment Method: {orderData["payment-method"]}</li>
            <li>Amount Paid: {charge}</li>
          </ul>
          <h2>Thank You!</h2>
          <p>Your order has been confirmed.</p>
        </>
      ) : (
        <h1>Go home to add items</h1>
      )}
      <button onClick={handlehome}>Back to Home </button>
      
    </div>
  );
};

export default Confirm;
