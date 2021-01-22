

function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var result = kilometerToMeter(3);
console.log(result);

// 
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 300;
function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 300;
return watchTotal + phoneTotal + laptopTotal;

}
var totalCost = budgetCalculator(1, 1, 2);
console.log(totalCost);

// 
function hotelCost(night) {
    var parNight = 0;
    if (night <= 10) {
        parNight = night * 100;
    }
    else if (night <= 20) {
        var first10Days = 10 * 100;
        var remaining = night - 10;
        var second10Days = remaining * 80;
        parNight = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = night - 20;
        var third10days = remaining * 50;
        parNight = first10Days + second10Days + third10days;
    }
    return parNight;
}
var totalCost = hotelCost(31);
console.log(totalCost);

// 
function megaFriend(name) {
    var long = name[0];
    for (var i = 0; i < name.length; i++) {
        const element = name[i];
        if (long.length <= element.length) {
            long = element;
        }

    }
    return long;
}

var friend = ["abir", "tuhin", "robin", "abdullah", "ali"];
var longword = megaFriend(friend);
console.log(longword);
