// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(newName){
    var newName = customerName.toUpperCase();
    customerName = newName;
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
};

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = 'stan';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'jim';
    return leastFavoriteCustomer;
}