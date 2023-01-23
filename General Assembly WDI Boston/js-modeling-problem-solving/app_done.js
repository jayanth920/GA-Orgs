var User = require('./lib/user.js'),
    _ = require('lodash'),
    mort = new User('Mort'),
    joy = new User('Joy'),
    laura = new User('Laura');

// Mort manages the store
mort.setAsStoreManager();

console.log("mort is ", mort);
console.log("joy is ", joy);
console.log("laura is ", laura);

var electrical = User.addDepartment('Electrical');
var plumbing = User.addDepartment('Plumbing');
var lawn = User.addDepartment('LawnGarden');
var tools = User.addDepartment('Tools');
var hardware = User.addDepartment('Hardware');

electrical.addProduct('Fuse', 'Electrical Fuse', 1.99);
electrical.addProduct('Battery', 'Battery', 4.99);
electrical.addProduct('Switch', 'Electrical Switch', 14.55);
//console.log("Dept is ", electrical);

plumbing.addProduct('Toilet', 'Porcelin Toilet', 134.55);
plumbing.addProduct('Solder', 'Best Solder', 5.99);
plumbing.addProduct('Sink', 'Wooden Sink', 785.99);
//console.log("Dept is ", plumbing);

lawn.addProduct('Shovel', 'Wide Shovel', 15.99);
lawn.addProduct('Rake', 'Metal Rake', 9.99);
lawn.addProduct('Hose', 'Rubber Hose', 23.99);
//console.log("Dept is ", lawn);

tools.addProduct('Saw', 'Hand Saw', 8.78);
tools.addProduct('Drill', 'Electricw', 44.99);
tools.addProduct('Vacuum', 'Wet Vacumm', 89.78);
//console.log("Dept is ", tools);

hardware.addProduct('Washer', 'Metal Washer', 0.01);
hardware.addProduct('Nut', 'Plastic Nut', 0.01);
// console.log(hardware.name, "department has products ", hardware.products);

User.addToDepartmentRole(joy, electrical, 'manager');
User.addToDepartmentRole(laura, electrical, 'associate');

console.log(mort.name, 'depts are', _.pluck(mort.departments(), 'name') );
console.log(mort.name," products are ",_.pluck( mort.findProducts(), 'name'));
console.log(joy.name, 'depts are', _.pluck(joy.departments(), 'name'));
console.log(joy.name, 'products are ',_.pluck(joy.findProducts(), 'name'));
