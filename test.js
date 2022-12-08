1 Prime no...
let num=7;
let count=0;
for(let i=0; i<=num; i++){
if(num%i==0){
count++

}

}
if(count==2){
console.log("prime")
}else{
console.log("not prime")
}


2. palindrome....
let str="naman";
let bag='';
for(let i=str.length-1; i>=0; i--){
bag+=str[i];
}
if(str==bag){
console.log("it is palindrome")
}else{
console.log("it is mot palindrome")

}