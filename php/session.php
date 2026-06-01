<!-- 
A PHP session is used to store data on the server for a specific user.

Sessions are commonly used for:

Login systems
Shopping carts
User authentication
Temporary user data

Unlike cookies, session data is stored on the server, making it more secure.

Main Difference from Cookies

Even though both work across pages:
Cookies store actual data in the browser
Sessions store data on the server and only keep a session ID in the browser

Starting a Session

Use:

session_start();

This must be written before any HTML output.

Creating Session Variables

    <?php

    session_start();

    $_SESSION["username"] = "Jonash";
    $_SESSION["age"] = 20;

    ?>

    Accessing Session Variables
    <?php

    session_start();

    echo $_SESSION["username"];
    echo $_SESSION["age"];

    ?>


Output:

Jonash
20
-->

<?php

session_start();

$_SESSION["username"] = "Jonash";

?>

<!DOCTYPE html>
<html>
<body>

<?php
if(isset($_SESSION["username"])){
    echo "Hello " . $_SESSION["username"];
}
else{
    echo "Session not found";
}
?>

</body>
</html>