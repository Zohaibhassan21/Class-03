document.body.style.backgroundColor = 'pink';
/*Question 1st*/
//Array within function for splice methiod
var numbers = [1, 4, 6, 8, 10];
function array_modifier(a, index, val) {
    a.splice(index, 0, val);
    return a;
}
console.log(numbers);
var result = array_modifier(numbers, 1, 2);
console.log(result);
var shoppingCart = [{ name: 'paper', quantity: 2 }];
function add_to_cart(Item) {
    shoppingCart.push(Item);
    console.log(shoppingCart);
    return shoppingCart;
}
function remove_from_cart(itemName) {
    var index = shoppingCart.findIndex(function (item) { return item.name === itemName; });
    if (index != -1) {
        shoppingCart.splice(index, 1);
    }
    return shoppingCart;
}
function updateQuantity(Item) {
    var newitem = shoppingCart.find(function (item) { return item.name === Item.name; });
    if (newitem) {
        newitem.quantity = Item.quantity;
    }
}
add_to_cart({ name: 'Pencil', quantity: 3 });
add_to_cart({ name: 'Rubber', quantity: 7 });
remove_from_cart('Pencil');
updateQuantity({ name: 'Rubber', quantity: 5 });
console.log(shoppingCart);
//
/*Question 3rd*/
//while loop for first 25 integers
var j = 1;
while (j <= 25) {
    console.log("".concat(j));
    j++;
}
//
/*Question 4rth*/
//while loop for first ten even numbers
var i = 1;
var count = 0;
while (i <= 100 && count != 10) {
    if (i % 2 != 0) {
    }
    else {
        console.log(i + ' is even number');
        count++;
    }
    i++;
}
//
/*Question 5th*/
//positive integer then factorial of that number
function factorial(a) {
    var fac = 1;
    if (a >= 0) {
        while (a != 0) {
            fac = fac * a;
            a--;
        }
        return fac;
    }
    else {
        console.log('Enter a positive integer plz');
        return 0;
    }
}
var fact = factorial(6);
console.log(fact); // 720
var fact1 = factorial(-6);
console.log(fact1); // 0 // enter a positive integer
//
/*Question 6th*/
//remove negative number from array
function remNegNum(a) {
    if (a.length == 0) {
        return a;
    }
    else {
        for (var index = 0; index < a.length; index++) {
            if (a[index] < 0) {
                a.splice(index, 1);
                index = --index;
            }
        }
        return a;
    }
}
var array1 = remNegNum([-1, -2, -6, -3, -3, 2, -6, -8, -3, -4, -2, -2]);
console.log(array1);
//
/*Question 7th*/
//sum of array in a function
function sum(a) {
    var sum = 0;
    if (a.length == 0) {
        return sum;
    }
    else {
        for (var index = 0; index < a.length; index++) {
            sum = sum + a[index];
        }
        return sum;
    }
}
var array2 = sum([-1, -2, -6, -3, -3, 2, -6, -8, -3, -4, -2, -2]);
console.log(array2);
//
/*Question 7th*/
//temperature conversion
//
function tempConv(a) {
    var F;
    if (a.length == 0) {
        return a;
    }
    else {
        for (var index = 0; index < a.length; index++) {
            F = (a[index] * 9 / 5) + 32;
            a[index] = F;
        }
        return a;
    }
}
var array = tempConv([-1, -2, -6, 3, -3, 2, -6, -8, 33, -4, 2, -2]);
console.log(array);
//
