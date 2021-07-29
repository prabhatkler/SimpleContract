pragma solidity ^0.5.0;

contract storagecontract {
    struct Person {
        string name;
        uint age;
    }
    mapping(address=>Person) public people;
    address[] public peopleAddress;

    function setData(string memory _name, uint _age) public {
        Person memory newPerson = Person({
            name : _name,
            age : _age
        });

        people[msg.sender] = newPerson;
        peopleAddress.push(msg.sender);
    }

    function getPersonData(address _address) public view returns(string memory, uint){
        return(
            people[_address].name,
            people[_address].age
        );
    }

    function getPersonAddress() public view returns(address[] memory) {
        return peopleAddress;
    }

}