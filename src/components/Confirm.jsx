import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 const Confirm = () => {
  const { orderData } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(orderData)
return (
  <div className="games-container"> 
  
     {orderData ?
        (  
          <>
          <h2>Your Order Summery</h2>
           <ul className="games-list">
          <li>Event Start Date: {orderData["event-start-date"]}</li>
          <li>Event End Date: {orderData["event-end-date"]}</li>
          <li>Setup Date: {orderData["setup-date"]}</li>
          <li>Location: {orderData.location}</li>
          <li>Payment Method: {orderData["payment-method"]}</li>
        </ul> 
           </>  ) : ( <h1>Go home to add items</h1> )
    }
 

      <Link to="/"> <button>Back to Home </button></Link>{" "}
   
  </div>
);
};

export default Confirm