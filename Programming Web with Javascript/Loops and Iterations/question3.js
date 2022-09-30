
let arr1 = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
var output = "";
for(let i=arr1.length-1;i>=0;i--){
    output = output + " " +arr1[i];
}
console.log(output);

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

const obj1 = { property1: 'initial_data'};
        const obj2 = Object.freeze(obj1);
        obj2.property1 = 'new_data';
        console.log(obj2.property1);