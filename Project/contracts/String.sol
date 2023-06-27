// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.0;


contract String  
{

    string public text;

    function setter(string memory a_text) public 
    {
        text = a_text;
    }

    function getter() public view returns(string memory)  
    {
        return text;
    }
}