let empName = "Shrini";
let targetChar = 'i'
let count = 0;
for (let i = 0; i<empName.length; i++) {
    if(empName.charAt(i)===targetChar)
    {
        count++;
    }
}
console.log("Number of times 'I' appears: " + count);