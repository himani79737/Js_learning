
function printTable(num) {
    console.log(`multipication table of = ${num}`);
    
    for(let i = 1; i<=10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}
printTable(6);