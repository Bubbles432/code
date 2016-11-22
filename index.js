//when the jQuery Mobile page is initialised
var locationOptions = { 
	maximumAge: 10000, 
	timeout: 6000, 
	enableHighAccuracy: true 
};

var watchID; 
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$('#getLocationButton').on('click', getPosition);
	$('#YesLocation').on('click', hello);
	$('#NoLocation').on('click', fail);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	//var time = position.timestamp;
	var unixtime = new Date(position.timestamp);
	var date = unixtime.toDateString();

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	
	//OK. Now we want to update the display with the correct values
	//$('#time').val("Recieved data at " + time);
	$('#time').val("Recieved data at " + unixtime);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
	
}
function hello(){

	watchID = navigator.geolocation.watchPosition(
	success, fail, locationOptions); 
	}
	
function success(position) {
	//do something with the position
	var unixtime = new Date(position.timestamp);
	var date = unixtime.toDateString();

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	
	//OK. Now we want to update the display with the correct values
	//$('#time').val("Recieved data at " + time);
	$('#time').val("Recieved data at " + unixtime);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
	
}

function fail(error) {
	//do something with the error
	navigator.geolocation.clearWatch(watchID);
}


//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}