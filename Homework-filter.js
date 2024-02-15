const arr1 = [1, 2, 3, 4, 5, 7, 9, 10, 20];
const filteredArray1 = arr1.filter((item, index)=>{
    return item>=5;
});
console.log("Array that has only the numbers that are 5 or greater");
console.log(filteredArray1);
console.log("----------------------------");
const arr2 = [1, 2, 3, 5, 7, 9, 10, 11, 12, 16, 20, 40, 50];
const filteredArray2 = arr2.filter((value, index, array)=>{
    return value % 2 == 0;
});
console.log("Array that only includes the even numbers");
console.log(filteredArray2);
console.log("----------------------------");
const arr3 = ["macro", "ram", "cpu", "graphics card", "motherboard"];
const filteredArray3 = arr3.filter((item, index)=>{
    return item.length <= 5;
});
console.log("Array that only includes those that are 5 characters or fewer in length");
console.log(filteredArray3);
console.log("----------------------------");
const arr4 = [
    {id : 1, name: "Ahmed", age: 18},
    {id : 2, name: "Malek", age: 19},
    {id : 3, name: "Wissem", age: 23},
    {id : 4, name: "Adem", age: 21},
    {id : 5, name: "Ahmed", age: 16},
    {id : 6, name: "Mazen", age: 15},
];
const filteredArray4 = arr4.filter((item, index)=>{
    if (item.age <=18){
        return item;
    }
});
console.log("Array that has filtered out all those who don't belong to the club.");
console.log(filteredArray4);
console.log("----------------------------");
const filteredArray5 = arr4.filter((item, index)=>{
    if (item.age > 18){
        return item;
    }
});
console.log("filtered list of all the people who are old enough (older than 18)");
console.log(filteredArray5);


