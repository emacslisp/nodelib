let JWTClass = require('../lib/JWTService');

let JWTService = new JWTClass();

const number = { data: "1234" };

/*
let token = JWTService.generateToken(number);

console.log("token: ");
console.log(token);
*/

let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjp7ImZpcnN0IjoiTWF0dCIsImxhc3QiOiJPbGFlcyJ9LCJwaG9uZSI6IjA0MzIzODQ0MDMiLCJtb2JpbGUiOiIwNDIxIDU0OSAxMjMiLCJlbWFpbCI6Im1vbGFlc0BDbG91ZDlDb25zdWx0aW5nLm5ldC5hdSIsImN1c3RvbWVyIjoiNWI1MTRmMGI0OTAwOWEwZTMxNjRjN2I3IiwicG9zaXRpb24iOiJFeGVjdXRpdmUgRGlyZWN0b3IiLCJncm91cHMiOlsic2VydmljZXMiLCJwcm92aXNpb25pbmciLCJub2MiLCJuZXR3b3JrIiwicmVwb3J0cyIsInZvaWNlIiwiaXAtdGVsLW9yZGVyaW5nIiwiY3VzdG9tZXItYWRtaW4iLCJidXNpbmVzcy1wYXJ0bmVyIiwiY3VzdG9tZXItYmlsbGluZyJdLCJhY2NlcHRzIjp7ImhpZGVJbnRyb1ZpZGVvIjoiZmFsc2UifSwidGltZXpvbmUiOiJBdXN0cmFsaWEvTWVsYm91cm5lIiwibG9naW4iOnsidXNlcm5hbWUiOiJtb2xhZXNAY2xvdWQ5Y29uc3VsdGluZy5uZXQuYXUifSwiaWF0IjoxNTY5ODExNjI2LCJleHAiOjE1NzI0MDM2MjZ9.0_EGdz3e1KEi6LJVr-_BAlfgAnGHJ87OkluuUTTuRRc";

let result = async() => {console.log(await JWTService.verifyToken(token));};
result();


