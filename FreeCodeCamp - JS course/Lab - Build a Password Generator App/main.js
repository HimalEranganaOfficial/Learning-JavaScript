function generatePassword(lengthOfPassword) {
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let passwordArray = new Array();
    for (let i = 0; i < Number(lengthOfPassword); i++) {
        passwordArray.push(charList[Math.ceil((Math.random())*(charList.length - 1))]);
    }
    let generatedPassword = passwordArray.join("");
    return generatedPassword;
}

let password = generatePassword(10);
console.log(`Generated password:${password}`);
