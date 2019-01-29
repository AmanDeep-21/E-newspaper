        function validate(){
          var username,password;
          username = document.getElementById('username').value;
          password = document.getElementById('password').value;
         // console.log(username.search("@"))
         // if (username.length == 0 || 0 > username.search("@") || 0 > username.search(".com")) {
          if (username.length == 0) {
            alert("kindly enter your username");
            document.getElementById('username').focus();
            return false;
          }
          else if(password.length < 8){
            alert("kindly enter at least 8 character password")
            document.getElementById('password').focus();
            return false;
          }
          else {
            return true;
          }
        }



