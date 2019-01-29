function validate(){
	var news;

	news = document.forms["myForm"]["news"].value;

	if(news == "j")
	{
		alert("Please select any option in SEARCH !");
		document.getElementById('news').focus();
		return false;
	}
	else 
		return true;
}