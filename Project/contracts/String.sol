// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.0;


contract String  
{
    string[] private cardnumber;
    string[] private cvv;
    string[] private expiry;

    function setter(string memory a_text, string memory a_cvv, string memory a_expiry) public 
    {
        cardnumber.push(a_text);
        cvv.push(a_cvv);
        expiry.push(a_expiry);
    }

    function getter(uint i) public view returns(string memory, string memory, string memory)  
    {
        if(i>cardnumber.length)
        {
            return ("0","0","0");
        }
        return (cardnumber[i], cvv[i], expiry[i]);
    }

    function getLength() public view returns(uint)
    {
        return cardnumber.length;
    }
}