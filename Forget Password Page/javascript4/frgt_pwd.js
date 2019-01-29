function validate(){
          var email;
          email = document.getElementById('email').value;
          //console.log(username.search("@"))
          
          if (email.length == 0 ){
            alert("Kindly enter your email id!");
            document.getElementById('email').focus();
            return false;
          }

            else if( 0 > email.search("@") || 0 > email.search("com") || 0> email.search(".")) {
            alert("Kindly enter valid email id!");
            document.getElementById('email').focus();
            return false;
          }
          else
            return true;
        }