var abc = {"id":1000,"name":"Mohan"};
var xyz = abc;
abc["id"] = 2000;
console.log(abc); //object is a non primitive data type sooo threw referense stored the data in memory so both out put will be same.
console.log(xyz);