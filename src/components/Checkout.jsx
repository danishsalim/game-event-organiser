import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Checkout = () => {
  const { cart, setOrderData, transportData,charge,setCharge } = useContext(CartContext);
  const navigate = useNavigate();

  const [locate, setLocate] = useState("");
  const [distance, setDistance] = useState("");
  

  const handleEnquiry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const eventDetail = {
      "event-start-date": formData.get("event-start-date") ?? "",
      "event-end-date": formData.get("event-end-date") ?? "",
      "setup-date": formData.get("setup-date") ?? "",
      location: formData.get("location") ?? "",
      "payment-method": formData.get("payment-method") ?? "",
    };
    if(eventDetail["event-start-date"].slice(8,10)>=eventDetail["event-end-date"].slice(8,10))
    {
       alert("event-start-date should be earlier than event-end-date kindly change it")
    }
    else if(eventDetail["event-start-date"].slice(8,10)<=eventDetail["setup-date"].slice(8,10))
    {
       alert("setup-date should be earlier than event-start-date kindly change it")
    }
    else if(eventDetail["event-start-date"].slice(8,10) - eventDetail["setup-date"].slice(8,10) > 1)
    {
       alert("setup-date should be 1 day earlier than event-start-date kindly change it")
    }
    else{

    setOrderData(eventDetail);
    navigate("/Confirm");
    }
  };

  const handleLocation = (e) => {
    let loc = e.target.value;
    setLocate(loc);
    let dist = transportData
      .filter((data) => data.name == loc)[0]
      ["Distance"].slice(0, 2) || 0;
    setDistance(dist + "km");
    if (dist && 2 * dist < 30) {
      setCharge(1500 + "rs");
    } else {
      let charge = (2 * dist - 30) * 50 + 1500;
      setCharge(charge + "rs");
    }
    document.querySelector("#charge").classList.remove("hidden");
  };

  return (
    <div className="cart-container">
      <Link to="/">
        {" "}
        <button>Home</button>
      </Link>
      <h2>Games in Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="cart-list">
          {cart.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="checkout-form">
          <h3>Checkout</h3>
          <form className="form" onSubmit={(e) => handleEnquiry(e)}>
            <label htmlFor="event-start-date">Event Start Date:</label>
            <input
              type="datetime-local"
              id="event-start-date"
              name="event-start-date"
              required
            />

            <label htmlFor="event-end-date">Event End Date:</label>
            <input
              type="datetime-local"
              id="event-end-date"
              name="event-end-date"
              required
            />

            <label htmlFor="setup-date">Setup Date:</label>
            <input type="datetime-local" id="setup-date" name="setup-date" required/>

            <label htmlFor="location">Event Location:</label>
            <select id="location" name="location" onChange={handleLocation} required>
              <option value="">Select Location</option>
              <option value="Baghajatin, Kolkata, WB">
                Baghajatin, Kolkata, WB
              </option>
              <option value="Garia, Kolkata, WB">Garia, Kolkata, WB</option>
              <option value="Sealdaha, Kolkata, WB">
                Sealdaha, Kolkata, WB
              </option>
              <option value="Jadavpur, Kolkata, WB">
                Jadavpur, Kolkata, WB
              </option>
            </select>

            <div className="hidden" id="charge">
              <h3>Location : {locate} </h3>
              <h3>Distance : {distance} </h3>
              <h3> Charge : {charge}</h3>
              <h5>Select a Payment Method to Proceed :</h5>
            </div>

            <label htmlFor="payment-method">Payment Method:</label>
            <select id="payment-method" name="payment-method" required>
              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Cheque">Cheque</option>
            </select>

            <button type="submit">Make Enquiry</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
