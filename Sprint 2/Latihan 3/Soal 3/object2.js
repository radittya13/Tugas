function arraytoobject(arr){
    var date = new Date ()
    var data1 = date.getFullYear() - arr["1. Abduh Muhamad"][3]
    var data2 = date.getFullYear() - arr["2. Ahmad Taufik"][3]

    var people1 = {
        firstName : arr ["1. Abduh Muhamad"][0],
        lastName  : arr ["1. Abduh Muhamad"][1],
        gander    : arr ["1. Abduh Muhamad"][2],
        age       : data1
    }

    var people2 = {
        firstName : arr ["2. Ahmad Taufik"][0],
        lastName  : arr ["2. Ahmad Taufik"][1],
        gander    : arr ["2. Ahmad Taufik"][2],
        age       : data2
    }

    console.log('1. Abduh Muhamad : ',people1);
    console.log('\n');
    console.log('2. Ahmad Taufik  :',people2);
}

var people = {
    "1. Abduh Muhamad" : [
        "Abduh",
        "Muhammad",
        "male",
        1992,
    ],
    "2. Ahmad Taufik" : [
        "Ahmad",
        "Taufik",
        "male",
        1985
    ]
}

arrayToobject(people) 