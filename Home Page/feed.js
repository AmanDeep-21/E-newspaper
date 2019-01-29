function validate(){
	var name=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var msg-box=document.getElementById('msg-box').value;
	if(name.length==0)
	{
		alert.("Please enter your name!");
		document.getElementById('name').value;
		return false;
	}
	else if (email.length == 0 ){
        alert("Kindly enter your email id!")
        document.getElementById('email').focus();
        return false;
    }

    else if( 0 > email.search("@") || 0 > email.search(".com")) {
        alert("kindly enter valid email id!")
        document.getElementById('email').focus();
        return false;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	if(phone.length != 10)
	{
		alert.("Please check entered mobile number.");
		document.getElementById('phone').value;
		return false;
	}
	else if(msg-box.length == 0)
	{
		alert.("Please give your valuable feedback.");
		document.getElementById('msg-box').value;
		return false;
	}
	else
		return true;
}