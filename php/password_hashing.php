<!-- 
Password hashing is the process of converting a password into a secure encrypted string.

It is used to protect passwords in databases.

Important Notes

Passwords should NEVER be stored as plain text.

Wrong:
123456

Correct:
$2y$10$Aasd8sh...

PHP provides built-in functions for password hashing.

Main Functions:

password_hash()
Creates a hashed password

password_verify()
Checks if the entered password matches the hash

Creating a Password Hash:

$password = "mypassword";

$hash = password_hash($password, PASSWORD_DEFAULT);

PASSWORD_DEFAULT uses a strong hashing algorithm automatically.

Verifying a Password:

password_verify($password, $hash)

Returns:
true  → password correct
false → password incorrect

Why Hashing is Important:

Protects user passwords
Improves security
Even database admins cannot see actual passwords

Important Difference:

Hashing is NOT encryption.

Encryption can be decrypted.
Hashing cannot normally be reversed.
-->

<?php

$password = "mypassword";

$hash = password_hash($password, PASSWORD_DEFAULT);

echo "Hashed Password: " . $hash . "<br><br>";

$enteredPassword = "mypassword";

if(password_verify($enteredPassword, $hash)){
    echo "Password is correct";
}
else{
    echo "Incorrect password";
}

?>