const arr1 = [1, 2, 3, 4, 5, 7, 9, 10, 20];
const sumarray = arr1.reduce((sum, item, index)=>{
    return sum + item;
}, 0);
console.log("Turn an array of numbers into a total of all the numbers");
console.log(sumarray);
console.log("----------------------------");
const arr2 = [1, 2, 3, 5, 7, 9, 10, 11, 12, 16, 20, 40, 50];
const strarray = arr2.reduce((chaine, item , index)=>{
    return chaine + item;
},"");
console.log("Turn an array of numbers into a long string of all those numbers.");
console.log(strarray);
console.log("----------------------------");
const arr3 = [
    {id : 1, name: "Ahmed", voted: 1},
    {id : 2, name: "Malek", voted: 0},
    {id : 3, name: "Wissem", voted: 0},
    {id : 4, name: "Adem", voted: 1},
    {id : 5, name: "Ahmed", voted: 0},
    {id : 6, name: "Mazen", voted: 1},
];
const votedarray = arr3.reduce((numv, item, index)=>{
    if (item.voted == 1){
       numv+=1;
    }
    return numv;
},0);
console.log("Turn an array of voter objects into a count of how many people voted");
console.log(votedarray);
console.log("----------------------------");
const arr4 = [
    {Num: 1, Product: "Intel Core i9-14900KF", price:2335},
    {Num: 2, Product: "MSI MAG Z790 Tomahawk MAX WiFi Gaming Motherboard", price:818},
    {Num: 3, Product: "ROG Strix GeForce RTX™ 4090 24GB GDDR6X", price: 8199},
    {Num: 4, Product: "GIGABYTE AORUS Gen4 7000s SSD 2TB PCIe 4.0 NVMe M.2", price:504},
    {Num: 5, Product: "Gigabyte Aorus C700 Glass", price:1194},
    {Num: 6, Product: "G.SKILL Trident Z5 RGB Series DDR5 RAM 32GB", price:500},
    {Num: 6, Product: "ROG Thor 1200W Platinum II 1200 Watt Fully Modular Power Supply 80+ Platinum", price:976},
    {Num: 6, Product: "AORUS WATERFORCE X II 360 Liquid CPU Cooler", price:913},
];
const ptarray = arr4.reduce((pt, item, index)=>{
     return pt+item.price;
    },0);
console.log("this how much it would cost to just buy everything in your wishlist at once");
console.log(ptarray + " TND");
console.log("----------------------------");
