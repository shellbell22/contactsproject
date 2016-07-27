$(document).ready(function() {

var afirstName;
var alastName;
var aphoneNumber;
var astreet;
var acity;
var astate;

var contactlist = [];

$('#contactsformforreal').submit(function() {
    afirstName =  $('#firstnameinput').val();
    console.log(afirstName);
    alastName = $('#lastnameinput').val();
    aphoneNumber = $('#phonenumberinput').val();
    astreet = $('#streetinput').val();
    acity = $('#cityinput').val();
    astate = $('#stateinput').val();


    var anaddress = new address(astreet, acity, astate);
    var acontact= new contactperson(afirstName, alastName, aphoneNumber, anaddress);

    acontact.address = anaddress;
    contactlist.push(acontact);

    var contacthtml = "";
    var contactjquery;

    contacthtml += '<li>' + afirstName + " " + alastName + '</li>';
    contactjquery = $(contacthtml);
    function clickcallback (acontact) {
      return function() {
          $('#rightcontactlist h2').text(acontact.firstName);
      };
    }
    contactjquery.click(clickcallback(acontact));

  $('#showncontactlist').append(contactjquery);

  document.getElementById('contactsformforreal').reset();

    return false;
});




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
