//object1
function makanan (namaMakanan,harga) {
    return{
        "namaMakanan" : namaMakanan,
        "harga" : harga
    }
}

console.log(makanan("nasi padang",12000))

//object2
var laptop = {
    merek:'lenovo',
    berat:1.5,
    warna:'biru dongker',
    on:function(menghidupkan) {
        return 'laptop'


    },
    off:function(mati) {
        return 'mematikan laptop'
      
    }
}
console.log(laptop)

//object3

function minuman(namaMinuman,harga) {
    return{
        "nama minuman" : namaMinuman,
        "harga" : harga
    }
}
console.log(minuman("ice chocolatos",10000))



