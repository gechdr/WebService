console.log("Hello world!");

//SEQUENCE

//deklarasi variabel

//tidak disaerankan
var a = 10;

//disarankan
let b = 20;
const c = 30;

b = 50;
b = "wkwkwk";
//tidak boleh karena consts
//c = 60;

console.log("a = " + a + ", b = " + b + ", c = " + c);
console.log(`a = ${a}, b = ${b}, c = ${c}`);

//BRANCHING
let b0 = 5;
if(b0<0){
    console.log("kecil");
} else if(b0<5) {
    console.log("sedang");
} else {
    console.log("besar");
}

if (b0 == "5") {
    console.log("sama");
} else {
    console.log("beda");
}
if (b0 === "5") {
    console.log("sama2");
} else {
    console.log("beda2");
}

b0 = "";
// falsey
// 0, "", undefined, null, false

if (b0) {
    console.log("truey");
} else {
    console.log("falsey");
}

//LOOPING
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i0 = 0;
while (i0 < 0) {
    console.log(i0);
    i0++;
}
i0 = 0;
do {
    console.log(i0);
    i0++;
} while (i0 < 10);

//ARRAY
let arr = [1, "Dua", [3,4], 5, ];
arr.push("Enam");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i] = "-";
}
console.log(arr);

const arr0 = [1,2,3];
arr0[1] = 10;
arr0.push(100);
arr0.splice(0,2);
console.log(arr0);
//yang tidak boleh itu gini:
// arr0 = [3,2,1];

//FUNCTION
function tambah0(a,b){
    return a + b;
}
const tambah1 = function(a,b){
    return a + b;
}
const tambah2 = (a,b) => {
    return a + b;
}

console.log(tambah0(5,10));
console.log(tambah1(1,3));
console.log(tambah2(4,7));

function kuadrat(x){
    return x * x;
}
function lakukan(f,x){
    return f(x);
}

console.log(lakukan(kuadrat,5));
console.log(lakukan(function (x){
    return x * x;
},10));
console.log(lakukan((x) => {
    return x * x;
},4));

//OBJECT (JSON)
const mhs = {
    nrp: 220116000,
    nama: "Alberto",
    gender: true,
    mantan: ["Cindy","Gabrielle", "Budi", "Angela"],
    dosenWali: {
        kode: "D001",
        nama: "Angela",
    },
    tambahMantan: function(nama){
        this.mantan.push(nama);
    }
};
mhs.nama = "WKWKWK";
mhs["nama"] = "Alberto";
console.log(mhs);
console.log(mhs.nama);
console.log(mhs["nama"]);
console.log(mhs.dosenWali.nama);
console.log(mhs.mantan[0]);
mhs.tambahMantan("Julia");
console.log(mhs.mantan);