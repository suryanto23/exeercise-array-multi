
// Soal nomor 1
let a = document.querySelector("#aaa");

let menu = [
          
          ["HOME" , "link"],
          ["PROFILE" , "link"],
          ["SETTING" , "link"],
          ["LOGOUT" , "link"]

          ];

menu.forEach( (value) => {  a.innerHTML += value[0]+ "<a href='" +value[1]+ "'>" +"</a>" +"<hr>" ;} );









// Soal nomor 2
let hewan = ["kucing" , "kuda" , "kelinci"]

let hurufBesar = hewan.map( hurufBesar => hurufBesar.toUpperCase());

console.log(hurufBesar);



// Soal nomor 3
let kalimat = "halo semua, belajar coding di skilvul yuk"
console.log(kalimat.split(' ').length);


let panjang = kalimat.split(' ').length;
let res = kalimat.split(" ");

console.log(res);
console.log(res[0].length);


for(i=0 ; i < res.length ; i++){

    if( i % 2 == 0 ){ 
        
      res[i] = res[i].toUpperCase();

    }

};

console.log("String awal : " +kalimat);
console.log("String akhir : " +res.join(" "));