import React, { Component } from 'react';
import Web3 from 'web3';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class Admin extends Component {
  state = {
    currentAccount: ''
  };

  componentDidMount() {
    this.loadWeb3();
  }

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      this.getAccount();

      // Listen for account changes
      window.ethereum.on('accountsChanged', () => {
        this.getAccount();
      });
    } else {
      console.log('Please install MetaMask to use this application.');
    }
  };

  getAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    const currentAccount = accounts[0];
    this.setState({ currentAccount });
  };

  render() {
    const { currentAccount } = this.state;

    return (
      <div>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <p style={{ fontSize: '16px' }}>This page is accessible by  : <br />0x37DB82B208bFb38049a9f0F25B8730FFAbB08144</p>
<p style={{ fontSize: '10px', textAlign: 'right' }}>I still hate CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<hr />

        <h2>Current MetaMask Account:</h2>
        <p style={{ fontSize: '16px', color: "red" }}>{currentAccount}</p>
        {/* Your admin page content */}
        <Footer />
      </div>
    );
  }
}

export default Admin;
