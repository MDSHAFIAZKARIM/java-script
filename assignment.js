// Convert feet to miles

function feetToMile(feet){
    var mile = 5280;
    if(feet <= 0){
        return 'input cannot be less than zero';
    }else{
        var cal = feet / mile;
        var result = cal.toFixed(4);
    }
    return result+" miles";
}
var result = feetToMile(10580);
console.log(result);

// End Convert feet to miles


// wood calculations 

function woodCalculator(chair, table, bed){
    var forChair = 1;
    var fortable = 3; 
    var forBed   = 5; 

    if (chair && table && bed <= 0) {
        return "Invalid";
    }else{
        var farnichar1 = chair * forChair;
        var farnichar2 = table * fortable;
        var farnichar3 = bed   * forBed;

        var result = farnichar1 + farnichar2 + farnichar3;
        return result+" qubicfeet wood needed";
    }
}

var totalfarnichar = woodCalculator(4, 5, 6);
console.log(totalfarnichar);

// END wood calculations 


//Bulding brick calculations

function brickCalculator(storey){
    var brick = 1000;
    var feet = 0;
    if(storey >= 1 && storey <= 10){
        feet = 10;
        var calculate = storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey >= 11 && storey <= 20){
        feet = 12;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey > 20){
        feet = 15;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
}
var floor = brickCalculator(11);
console.log(floor);


//End Bulding brick calculations


//tine friend

function tinyFriend(friends){
    var small = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i]
        if(  element.length < small.length){
            var small = element;
        }
    }
    return small;
}

var friendName = ["kabbo", "kawser", "abir", "uma"];
console.log(tinyFriend(friendName));

//End tine friend