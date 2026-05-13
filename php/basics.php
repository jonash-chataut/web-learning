<!-- variables declarations -->
 <!-- php code -->
<?php
echo"Hi testing the server connection....<br>";
// variables declarations
$name="Mbappe";
echo"Hello dictator {$name}<br>";
echo"Hello dictator $name";
?>
<!-- variable declaration code end here -->


<!-- get and post concepts in php -->
<!-- html code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="basics.php" method="post">
        <label for="">Username:</label>
        <input type="text" name="username" id="">
        <br>
        <label for="">Password:</label>
        <input type="password" name="password" id="">
        <br>
        <input type="submit" name="" id="" value="login">
    </form>
</body>
</html>

<!-- php code -->
<?php 
$username=$_POST["username"];
$pp=$_POST["password"];
echo $username."<br>";
echo $pp;
?>

<!-- get and post concepts end here -->

<!-- Math functions -->
 <?php 
 $x=2;
 $y=3;
 $r=round(1.23589);
//  echo $r;

 $random=rand(1,100);
 echo $random;

 ?>
