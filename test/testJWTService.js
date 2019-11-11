let JWTClass = require('../lib/JWTService');

let JWTService = new JWTClass();

const number = { data: "1234" };

/*
let token = JWTService.generateToken(number);

console.log("token: ");
console.log(token);
*/

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjp7ImZpcnN0IjoiS29zdGEiLCJsYXN0IjoiTWl0YW5vdnNraSJ9LCJsb2dpbiI6eyJ1c2VybmFtZSI6IklULlByb2N1cmVtZW50QGNlcnRlZ3kuY29tLmF1In0sInBob25lIjoiIiwibW9iaWxlIjoiIiwiZW1haWwiOiJJVC5Qcm9jdXJlbWVudEBjZXJ0ZWd5LmNvbS5hdSIsInBvc2l0aW9uIjoiIiwiZ3JvdXBzIjpbInNlcnZpY2VzIiwicHJvdmlzaW9uaW5nIiwibm9jIiwicmVwb3J0cyIsImN1c3RvbWVyLWJpbGxpbmciLCJ2b2ljZSJdLCJhY2NlcHRzIjp7ImhpZGVJbnRyb1ZpZGVvIjpmYWxzZX0sImFzc2lnbmVkQmlsbGluZ0FjY291bnRzIjpbIjgxMDc0Il0sImN1c3RvbWVyIjoiNTc1YjYxOGJkNGIxNTQ2MGUwZjg5MmJiIiwiaWF0IjoxNTczMTI1MjM0LCJleHAiOjE1NzMyMTE2MzR9.3kuhiYJ1Phb7y8YS6aEeJIeiEATNuPpiWVHpaG86zNo";

let result = async() => {console.log(await JWTService.verifyTokenIgnoreDate(token));};
result();


