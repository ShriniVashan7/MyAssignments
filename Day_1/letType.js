//In let type reassign is possible and redeclare is not possible

//reassign
let Status=10
Status=11
console.log(Status);

{
    //new block
    let Status=20
    console.log(Status);
}