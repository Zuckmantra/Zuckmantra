let tamaño = 8;
let aje = "";
for (let i=0;i<tamaño;i++){
for (let j=0;j<tamaño;j++){
if ((i+j)%2===0){
aje += " ";
} else {
aje+= "#";
}
} aje += "\n";
}
console.log (aje);
