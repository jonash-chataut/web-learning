<!-- to validate the input -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="santitize_validate_input.php" method="POST">
        <label for="">Username:</label>
        <br>
        <input type="text" name="username" id="">
        <br>
        age:
        <br>
        <input type="number" name="age" id="">
        <br>
        <input type="submit" name="login" id="" value="login">
    </form>
</body>
</html>

<?php 
    if(isset($_POST["login"]))
        {
            // to filter the input we use the filter_input function
            //for filtering the special chars
            //FILTER_SANITIZE_SPECIAL_CHARS is a PHP filter used to convert special HTML characters into safe HTML entities
            $username=filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS); 
            // for filtering all the input except integers
            /*FILTER_SANITIZE_NUMBER_INT is a PHP filter that removes everything except:
            Digits (0-9)
            Plus sign (+)
            Minus sign (-) */
            $age=filter_input(INPUT_POST,"age",FILTER_SANITIZE_NUMBER_INT);
            echo "You are {$age} old {$username}";

            /*FILTER_VALIDATE_* filters are used to check if data is valid.
            Unlike FILTER_SANITIZE_* (which cleans data), validation filters return:
            the value itself → if valid
            false → if invalid
             */
        }
?>