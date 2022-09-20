var arr1 = ["a:", "b:", "c:"]
var arr2 = ["1", "2", "3"];

//output - [a:1, b:2, c:3]

var result= {};

for (let i = 0; i< arr1.length; i++) {
    result[arr1[i]] = arr2[i];

}
console.log(result);

var arr1 = ["a:", "b:","c:"]
var arr2 = ["Apple", "Microsoft", "Google"];

//output - ["a:1", "b:2", "c:3"]

var result= {};

for (let i = 0; i< arr1.length; i++) {
result[arr1[i]] = arr2[i];

}
console.log(result);



var arr1 = ["key1:", "key2:", "key3:"]
var arr2 = ["true", "false", "undefined"];

//output - [a:1, b:2, C:3]

var result= {};

for (let i = 0; i< arr1.length; i ++) {
    result[arr1[i]] = arr2[i];

}
console.log(result);