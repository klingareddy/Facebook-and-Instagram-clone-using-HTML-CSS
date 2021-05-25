/*function validate(){
	var name = document.getElementById('un').value;
	var pwd = document.getElementById('pwd').value;

	if(name.length >=6 && pwd.length >=6){
		alert("Data Validated..");
	}else{
		alert("Please enter name and pwd more than 6 char")
	}
}*/



//mouseover
function mouseover(){
	document.getElementById('login').style.backgroundColor="White";
}

//mouseout
function mouseout(){
	document.getElementById('login').style.backgroundColor="red";
}

//mousedown
function mousedown(){
	document.getElementById('login').innerHTML = "You clicked me";
}

//mouseup
function mouseup(){
	document.getElementById('login').innerHTML = "Log in";
}