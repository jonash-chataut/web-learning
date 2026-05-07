
function passwordGenerator(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols){
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChar : "";
  allowedChars += includeUppercase ? uppercaseChar : "";
  allowedChars += includeNumber ? numberChar : "";
  allowedChars += includeSymbols ? symbolChar : "";

  // console.log(allowedChars);

  if (passwordLength <= 5) {
    return `password length should be atleast 6 `;
  }

  if (allowedChars.length === 0) {
    return `atleast one set of character is required to select`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }  

  return password;
}

const passwordLength=6;
const includeLowercase=true;
const includeUppercase=true;
const includeNumber=true;
const includeSymbols=true;

let pp=passwordGenerator(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols);

console.log(`Generated password: ${pp}`);

