$(document).ready(function() {

var afirstName;
var alastName;
var aphoneNumber;
var astreet;
var acity;
var astate;

$('#submitbutton').click(function() {
    afirstName =  $('#firstnameinput').val();
    alastName = $('#lastnameinput').val();
    aphoneNumber = $('#phonenumberinput').val();
    astreet = $('#streetinput').val();
    acity = $('#cityinput').val();
    astate = $('#stateinput').val();
    });

var anaddress = new address(astreet, acity, astate);
var acontact= new contactperson(afirstName, alastName, aphoneNumber, anaddress);

});

function contactperson (first, last, number, address) {
    this.firstName = first;
    this.lastName = last;
    this.phonenumber = number;
    this.addressobject = address;
}

function address (street, city, state) {
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
}

var address = {
  street: "",
  city: "",
  state: "",
};
