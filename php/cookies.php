<!-- 
Cookies in PHP are small pieces of data stored in the user's browser.

They are commonly used for:

Login sessions
Remembering users
Saving preferences
Tracking activity

Important Note

A cookie becomes available after the page reloads because cookies are stored in the browser after the response is sent.

Use setcookie():
setcookie("username", "Jonash", time() + 3600);
This creates a cookie:
Name → "username"
Value → "Jonash"
Expiry → 1 hour from now

Cookies are stored in the $_COOKIE superglobal.
echo $_COOKIE["username"];
-->

<?php

setcookie("username", "Jonash", time() + 3600);

?>

<!DOCTYPE html>
<html>
<body>

<?php
if(isset($_COOKIE["username"])){
    echo "Hello " . $_COOKIE["username"];
}
else{
    echo "Cookie not found";
}
?>

</body>
</html>