// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Hello {

address immutable admin ;
bytes32   me = "Hi I'm Neluka";
uint8 favoriteNumber = 5; 
constructor(){
    admin = msg.sender;
}
function getAdmin() external view returns(address){
    return admin;
} 

function getMe() external view returns(bytes32){
    return me;
}
function getBalance() external view returns(uint) {
return address(this).balance;
}
function fund() external payable  {
    require(msg.value > 0 , "Insufficient balance");
}
function withdraw() external payable  {
require(msg.sender == admin , "you are not me :(" );
payable(admin).transfer(address(this).balance);
}

}
