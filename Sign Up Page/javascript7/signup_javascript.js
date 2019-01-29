 function validate(){
          var firstname,lastname,password,confirmpassword;
          firstname = document.getElementById('firstname').value;
          lastname = document.getElementById('lastname').value;
          password = document.getElementById('password').value;
          confirmpassword = document.getElementById('confirmpassword').value;
          email = document.getElementById('email').value;
          //console.log(firstname)
         // console.log(username.search("@"))
         // if (username.length == 0 || 0 > username.search("@") || 0 > username.search(".com")) {
          if (firstname.length == 0) {
            alert("kindly enter your firstname");
            document.getElementById('firstname').focus();
            return false;
          }
          else if (lastname.length == 0) {
            alert("kindly enter your surname");
            document.getElementById('lastname').focus();
            return false;
          }
          else if (email.length == 0 ){
            alert("Kindly enter your email id!")
            document.getElementById('email').focus();
            return false;
          }

          else if( 0 > email.search("@") || 0 > email.search(".com")) {
            alert("kindly enter valid email id!")
            document.getElementById('password').focus();
            return false;
          }

          else if(password.length < 8){
            alert("kindly enter at least 8 character password")
            document.getElementById('password').focus();
            return false;
          }

          else if(confirmpassword.length == 0){
            alert("Kindly confirm your password!");
            document.getElementById('confirmpassword').focus();
            return false;
          }
          else if(password != confirmpassword){
            alert("Kindly Check your password")
            document.getElementById('password').focus();
            document.getElementById('confirmpassword').focus();
            return false;
          }

          else {
            return true;
          }
        }