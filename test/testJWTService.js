let JWTClass = require('../lib/JWTService');

let JWTService = new JWTClass();

const number = { data: "1234" };

let token = JWTService.generateToken(number);

console.log("token: ");
console.log(token)


let result = async() => {console.log(await JWTService.verifyToken(token));};
result();


