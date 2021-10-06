function convertToRoman() {
    var resultado=0;
    var num=document.getElementById("num").value;
  let mil=[];
  let quinientos=[];
  let cien=[];
 let cincuenta=[];
 let diez=[];
 let cinco=[];
 let unos=[];
 let max=num;
 let prueba=num;
 let arrRom=[];
 
 for(let i=max;i>=1000;i--){
   prueba-=1000;
   i-=999;
   mil.push("M");
 }
 let milM=prueba;
 if(prueba<900){
 for(let i=prueba;i>=500;i--){
   milM-=500;
   i-=499;
   quinientos.push("D");
 }
 }else if(prueba>=900<1000){
   milM-=900;
   quinientos.push("CM");
 }
 let quinientosM=milM;
 if(quinientosM!==400){
 for(let i=quinientosM;i>=100;i--){
   quinientosM-=100;
   i-=99;
   cien.push("C");
 }
 }else if(quinientosM===400){
   cien.push("CD");
   quinientosM-=400;
 }
 let cienM=quinientosM;
 if(cienM>=50&&cienM<90){
   for(let i=quinientosM;i>=50;i--){
     cienM-=50;
     i-=49;
     cincuenta.push("L");
   }
   }else if(cienM>=90&&cienM<100){
     cincuenta.push("XC");
     cienM-=90;
   }
  let diesM=cienM;
   if(diesM>=10&&diesM<40){
     for(let i=cienM;i>=10;i--){
   diesM-=10;
   i-=9;
   diez.push("X");
 }
   }else if(diesM>=40&&diesM<50){
     diez.push("XL");
     diesM-=40;
   }
 let cincoN=diesM;
if(diesM>5&&diesM<9){
for(let j=diesM;j>5;j--){
  cincoN-=5;
  j-=4;
  cinco.push("V");
}
}else if(diesM===4){
  cinco.push("IV");
  cincoN-=4;
}else if(diesM===9){
  cinco.push("IX");
  cincoN-=9;
}else if(diesM===5){
  cinco.push("V");
  cincoN-=5;
}
if (cincoN>0&&cincoN<4){
  for(let k=cincoN;k>0;k--){
    unos.push("I");
  }
}
/*

if (cincoN>0){
  for(let k=cincoN;k>0;k--){
    unos.push("I");
  }
}
arrRom=arrRom.concat(diez).concat(cinco).concat(unos);
arrRom=arrRom.join("");
*/

 resultado= mil.concat(quinientos.concat(cien.concat(cincuenta.concat(diez.concat(cinco.concat(unos)))))).join("");
 
 document.getElementById("lbl_romano2").innerHTML= resultado;
 
}

