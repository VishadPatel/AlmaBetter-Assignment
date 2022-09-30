let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

var result = 0;

arr_1.forEach((element)=>{
    result  = result+ element;
});

arr_2.forEach((element)=>{
    result  = result+ element;
});

console.log(result)