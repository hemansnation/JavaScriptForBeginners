function validateform() {
	var name = document.myform.name.value;
	var password = document.myform.password.value;

	if(name == ""){
		alert("Name can not be blank")
		return false
	}else if(password.length <6){
		alert("password must be greater than 6 characters");
		return false
	}
}