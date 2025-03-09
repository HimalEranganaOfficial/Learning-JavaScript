let email = prompt("Enter your email", "himal19118141@gmail.com");

//Long Format ↓

/*function maskEmail(email) {
    atLocation = email.indexOf("@");
    atLocation = Number(atLocation); 
    backPart = email.slice(atLocation - 1);
    return `${email[0]}${"*".repeat((atLocation - 2))}${backPart}`;
}*/

const maskEmail = (email) => `${email[0]}${"*".repeat((Number(email.indexOf("@")) - 2))}${email.slice(Number(email.indexOf("@")) - 1)}`;
console.log(maskEmail(email));
