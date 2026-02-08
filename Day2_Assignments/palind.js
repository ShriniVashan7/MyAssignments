let str="civic"
let rev=""
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i]
}
console.log("Original String: "+str)
console.log("Reversed String: "+rev)
if(str===rev){
    console.log("Palindrome Result: True")
}
else{
    console.log("Palindrome Result: False")
}