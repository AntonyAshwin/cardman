import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class About extends Component {
  constructor() {
    super();
    this.state = {
      showGas: false
    };
  }

  handleShowGas = () => {
    this.setState({ showGas: true });
  }

  render() {
    return (
      <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <Nav />
    <br/> <br/> <br/> <br/>
        <hr />
        <p style={{ fontSize: '36px' }}>Hello there! <br />I am Antony Ashwin.</p>

        <p style={{ fontSize: '10px', textAlign: 'right' }}>I hate CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <hr /><br />
        <u>Aim:</u> To <mark>predict</mark> the <mark>gas fees</mark> for a smart contract before deploying it.

        <p style={{ fontSize: '15px' }}><i><u>Optional Objective:</u> Make the Dapp smartphone compatible</i></p>
        <hr />

        <p>What is Gas? <br/> <br />  Every operation or execution on the Ethereum network, such as deploying a smart contract, making a transaction, or executing a function within a contract, requires a certain amount of gas. <br /> The gas cost depends on the complexity and resource requirements of the operation. <br /></p>
        {this.state.showGas ? (
          <p id="whatisgas">
           Gas is relevant for several reasons:<br /><br />

<u>Fee Calculation:</u> Gas is used to calculate transaction fees. Each operation in Ethereum has a gas cost associated with it, and users must pay for the gas consumed to execute their transactions. The gas price, denoted in Ether (ETH), determines the cost of each unit of gas.<br /><br />

<u>Resource Allocation:</u> Gas helps in resource allocation on the Ethereum network. Since the network has limited resources, the gas mechanism ensures that resources are allocated fairly and prevents abuse or spamming of the network. Operations that require more computational resources or storage will consume more gas.<br /><br />

<u>Transaction Prioritization:</u> Gas plays a role in determining the priority of transactions. When the Ethereum network experiences high congestion or traffic, users can set a higher gas price to incentivize miners to prioritize their transactions for inclusion in the next block. Miners typically prioritize transactions with higher gas fees attached.<br /><br />

<u>Preventing Infinite Loops and Resource Exhaustion:</u> The gas limit per block ensures that infinite loops or computationally intensive operations do not disrupt the network. If the gas consumed by a transaction exceeds the gas limit, the transaction will fail, and any changes made during execution will be reverted.<br /><br />

Overall, gas serves as a mechanism for controlling and allocating resources, preventing abuse, and determining the cost and prioritization of transactions and operations on the Ethereum network. It ensures that the network remains secure, efficient, and economically viable.<br /><br /><hr />
          </p>
        ) : (
          <>
            <button onClick={this.handleShowGas}>Read More</button>
            <hr />
          </>
        )}

        <p>
          After a smart contract is deployed on the Ethereum network <i>(in this case, the card details)</i>,<br /> the following actions take place:<br />
        </p>

        <ol>
          <hr />
          <li>
            Transaction Execution: The Ethereum network verifies and executes the deployment transaction, ensuring that the contract is valid and adheres to the programming rules of the Ethereum Virtual Machine (EVM).<br />
          </li>
          <hr />
          <li>
            Contract Creation: A new smart contract instance is created on the Ethereum network with a unique address. This address serves as the identifier and entry point for interacting with the deployed contract.<br />

          </li>
          <hr />
          <li>
            Gas Consumption: Gas is the unit used to measure computational effort and fees in the Ethereum network. When deploying a smart contract, the transaction incurs gas costs based on the contract's complexity and the amount of code being deployed.<br />

          </li>
          <hr />
          <li>
            State Transition: The contract's state transitions from a non-existent state to an active state, allowing it to receive and process incoming transactions.<br />

          </li>
          <hr />
          <li>
            Event Emission: The smart contract can emit events during the deployment process. Events are used to notify external systems or other contracts about specific occurrences within the contract.<br />

          </li>
          <hr />
          <li>
            Contract Accessibility: Once deployed, the smart contract becomes publicly accessible. Anyone with the contract's address can interact with its functions and data, depending on the visibility and permissions set within the contract's code.<br />

          </li>
          <hr />
        </ol><br /><br /><br />
        <Footer />

      </div>
    );
  }
}

export default About;
