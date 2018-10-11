let JWTClass = require('../lib/JWTService');

let JWTService = new JWTClass();

const number = { data: "1234" };

let token = JWTService.generateToken(number);

console.log("token: ");
console.log(token)


JWTService.verifyToken(token).then(function(result) {
    console.log("final result is: ");
    console.log(result);
});


