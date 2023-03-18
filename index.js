// Code your solutions in this file
function countDown(num){
    for(let i= num; i >= 0; i--)
        console.log(i);
}
function writeCards(name){
    let array = [];
    for (let index = 0; index < name.length; index++) {
        let temp = "Thank you, " + name[index] + ", for the wonderful surprise gift!";
        array.push(temp);
    }
    return array;
}